import infoComponent from './components/info.js';

const CONFIG = {
    a: ['sorting', 'searching', 'pathfinding'],
    ds: ['segment-tree']
};

const DATA = new (class {
    async fetch(app, fs) {
        this.text = {};
        for (const lang of app.languages)
            this.text[lang] = Object.assign(
                JSON.parse(await fs.readFileSync(`./source/data/texts/${lang}/common.json`)),
                JSON.parse(await fs.readFileSync(`./source/data/texts/${lang}/general.json`))
            );

        this.pages = {};
        for (const type of main.typeList) {
            this.pages[type] = {};
            for (const key of main.config[type]) {
                this.pages[type][key] = {texts: {}};
                for (const lang of app.languages) {
                    const path = `./source/data/texts/${lang}/${key}.${type}.json`;
                    const fileData = await fs.readFileSync(path);
                    this.pages[type][key].texts[lang] = JSON.parse(fileData);
                }
                const commonData = JSON.parse(await fs.readFileSync(`./source/data/pages/${key}.${type}.json`));
                this.pages[type][key].complexitys = commonData.complexitys;
                this.pages[type][key].prolangs = commonData.prolangs;
                this.pages[type][key].codes = commonData.codes;
                this.pages[type][key].commentCodes = commonData.commentCodes;
            }
        }
        this.prolangConfig = JSON.parse(await fs.readFileSync(`./source/data/prolang-config.json`));
    }
    getPageData(lang, type, key) {
        const data = {};
        for (const k in this.pages[type][key]) data[k] = this.pages[type][key][k];
        data.texts = data.texts[lang];
        return data;
    }
})();

class Page {
    constructor(app, lang, type, key) {
        this.lang = lang;
        this.type = type;
        this.key = key;
        this.version = app.version;
        this.data = DATA.getPageData(lang, type, key);
        this.textData = DATA.text[lang];
        this.list = Object.keys(this.data.texts.list);
        this.data.prolangs = this.data.prolangs.split(',').sort();
        this.htmlCodes = {
            selectOptionsHTML: this.getSelectOptionsHTML(),
            informationsHTML: this.getInformationsHTML(),
            prolangsHTML: this.getProlangsHTML(),
            codesHTML: this.getCodesHTML()
        };
        this.htmlTexts = {
            playPauseBtnDataText: [
                this.textData.playText,
                this.textData.pauseText,
                this.textData.continueText,
                this.textData.repeatText,
                this.textData.selectText
            ].join(','),
            screenBtnDataText: [this.textData.fullScreenText, this.textData.exitFullScreenText].join(','),
            copyCodeBtnStatusText: [this.textData.successText, this.textData.failureText].join(','),
            guideMessageTexts: this.textData.guideMessageTexts.join('|'),
            constraintsTexts: this.data.texts.constraints.map((text) => `*${text}`).join('<br>')
        };

        app.get(`/${lang}/${type}/${key}`, (req, res) => this.render(res));
        for (const child of this.list)
            app.get(`/${lang}/${type}/${key}/${child}`, (req, res) => this.childRender(res, child));
    }
    childRender(res, child) {
        const title = this.data.texts.list[child].name;
        const config = {
            ...{key: this.key, lang: this.lang, type: this.type},
            child,
            keys: Object.keys(this.data.texts.list),
            title,
            description: title
        };
        switch (this.type) {
            case 'a':
                config.informationHTML = this.childInfomationHTML[child];
                break;
            case 'ds':
                config.informationHTML = this.informationHTML;
                break;
            default:
                console.warn('Unknown type: ' + this.type);
        }
        res.render('child-of-common', config);
    }
    render(res) {
        res.render('common', {
            title: this.data.texts.NAME,
            description: this.list.map((e) => this.data.texts.list[e].name).join(', '),
            ...{key: this.key, lang: this.lang, type: this.type},
            ...{...this.textData, ...this.htmlCodes, ...this.htmlTexts},
            selectTitleText: this.textData.selectTitleText[this.type],
            infoHTML: infoComponent(this.lang, this.textData, this.version)
        });
    }
    getCodesHTML() {
        const shortcuts = {' ': ' '};
        ['1|.', '3|-', '3|+', '3|--', '3|>', '3|<', '3|...', '3|/', '3|%', '1|,']
            .map((k) => k.split('|'))
            .forEach((k) => (shortcuts[k[1]] = `<span class="mtk${k[0]}">${k[2] || k[1]}</span>`));
        ['()|1,2,3'].forEach((k) => {
            k = k.split('|');
            k[1].split(',').forEach((n) => {
                shortcuts[k[0][0] + n] = `<span class="bracket-highlighting-${n}">${k[0][0]}</span>`;
                shortcuts[k[0][1] + n] = `<span class="bracket-highlighting-${n}">${k[0][1]}</span>`;
            });
        });

        for (const key in this.data.commentCodes)
            this.data.commentCodes[key] = this.data.commentCodes[key]
                .split('_')
                .map((code) => {
                    if (code.includes('|')) {
                        code = code.replace('mtk', '<span class="mtk');
                        code = code.replace('bh', '<span class="bracket-highlighting-');
                        code = code.replace('|', '">') + '</span>';
                        return code;
                    }
                    if (code.includes('</span>')) return code;
                    return shortcuts[code];
                })
                .join('');

        const completeComments = {};
        const comments = {};
        this.list.forEach((key) => (comments[key] = this.data.texts.list[key].comments));
        for (const key in comments) {
            completeComments[key] = {};
            for (const lang in comments[key]) {
                completeComments[key][lang] = [];
                if (typeof comments[key][lang] == 'string' && comments[key][lang].includes('{{{all(')) {
                    const endQuery = comments[key][lang].length - 4;
                    const query = comments[key][lang].substring(7, endQuery);
                    completeComments[key][lang] = completeComments[key][query];
                    continue;
                }
                comments[key][lang].forEach((cmt) => {
                    let list = [];
                    if (cmt.includes('{{{')) {
                        const [left, right] = cmt.replace('{{{', '').replace('}}}', '').split(',');
                        let source, range;
                        if (left.includes('-')) {
                            const [key, lang] = left.split('-');
                            source = completeComments[key][lang];
                        } else source = completeComments[key][left];
                        if (right.includes('-')) range = right.split('-').map((e) => Number(e));
                        else range = new Array(2).fill(Number(right));
                        const [start, end] = range;
                        for (let i = start; i <= end; i++) list.push(source[i]);
                    } else list.push(cmt);
                    list = list.map((temp) => {
                        let cmt = '';
                        while (temp.includes('{')) {
                            const startIndex = temp.indexOf('{'),
                                endIndex = temp.indexOf('}');
                            const keyOfCode = temp.slice(startIndex + 1, endIndex);
                            const htmlCode = '<code>' + (this.data.commentCodes[keyOfCode] || '~') + '</code>';
                            cmt += temp.slice(0, startIndex) + htmlCode;
                            temp = temp.substring(endIndex + 1);
                        }
                        return cmt + temp;
                    });
                    completeComments[key][lang].push(...list);
                });
            }
        }
        const addHTML = (cmt) => (cmt ? `<span class="cmt">${cmt}</span>` : '');
        for (const key in completeComments)
            for (const lang in completeComments[key])
                completeComments[key][lang] = completeComments[key][lang].map(addHTML);

        return (
            '<div class="codes">' +
            this.list
                .map((key) =>
                    this.data.prolangs
                        .map(
                            (prolang) =>
                                `<code class="${key} ${prolang}">` +
                                this.data.codes[key][prolang]
                                    .map((lineCode) => {
                                        if (lineCode == '<span>&empty-line;</span>')
                                            return '<span class="line-code"><span>&nbsp;</span></span>';
                                        if (lineCode[0] != '&') return `<span class="line-code">${lineCode}</span>`;
                                        let tabNumber = Number(lineCode.substring(4, lineCode.indexOf(';'))),
                                            tabHTML = '';
                                        for (let i = 0; i < tabNumber; i++) tabHTML += '&nbsp;&nbsp;&nbsp;&nbsp;';
                                        tabHTML = `<span class="tab">${tabHTML}</span><span class="line-code">`;
                                        lineCode = lineCode.replace(`&tab${tabNumber};`, tabHTML) + '</span>';
                                        return lineCode;
                                    })
                                    .map(
                                        (line, index) =>
                                            `<span order="${index + 1}" class="view-line">${line}` +
                                            (completeComments[key][prolang][index] || '') +
                                            '</span>'
                                    )
                                    .join('') +
                                '</code>'
                        )
                        .join('')
                )
                .join('') +
            '</div>'
        );
    }
    getSelectOptionsHTML() {
        return this.list.map((key) => `<option value="${key}">${this.data.texts.list[key].name}</option>`).join('');
    }
    getInformationsHTML() {
        const tabHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

        const getP = (t) => {
            if (typeof t == 'string') t = [t];
            else t = t.map((e) => '- ' + e);
            switch (this.lang) {
                case 'vi':
                    return `<p>${tabHTML}${t.join('<br>' + tabHTML)}</p>`;
                case 'en':
                    if (t.length > 1) return `<p>${tabHTML}${t.join('<br>' + tabHTML)}</p>`;
                    return `<p>${t[0]}</p>`;
                default:
                    console.warn('Unknown language: ' + this.lang);
            }
        };

        const getComplexity = (str) => {
            str = str.replaceAll('{x}', '&times;');
            while (str?.includes('{^')) {
                const value = str.substring(str.indexOf('{^') + 2, str.indexOf('}'));
                str = str.replace(`{^${value}}`, `<sup>${value}</sup>`);
            }
            return `O(${str})`;
        };

        const divInnerHTML = {
            a: (child) =>
                `<h1>${this.data.texts.list[child].name}</h1>` +
                Object.keys(this.data.texts.list[child].informations)
                    .map(
                        (e) =>
                            `<h2>${this.textData.informationTexts[e]}</h2>` +
                            getP(this.data.texts.list[child].informations[e])
                    )
                    .join('') +
                `<h2>${this.textData.informationTexts.complexity}</h2>` +
                '<table><tbody>' +
                Object.keys(this.data.complexitys[child])
                    .map(
                        (e) =>
                            '<tr>' +
                            `<td>${this.textData.complexityTexts[e]}</td>` +
                            `<td><span>${getComplexity(this.data.complexitys[child][e])}</span></td>` +
                            '</tr>'
                    )
                    .join('') +
                '</tbody></table>',
            ds: () =>
                `<h1>${this.data.texts.NAME}</h1>` +
                Object.keys(this.data.texts.INFORMATIONS)
                    .map((e) => `<h2>${this.textData.informationTexts[e]}</h2>` + getP(this.data.texts.INFORMATIONS[e]))
                    .join('') +
                `<h2>${this.textData.informationTexts.complexity}</h2>` +
                '<table><tbody>' +
                Object.keys(this.data.complexitys)
                    .map(
                        (e) =>
                            '<tr>' +
                            `<td>${this.data.texts.complexity[e]}</td>` +
                            `<td><span>${getComplexity(this.data.complexitys[e])}</span></td>` +
                            '</tr>'
                    )
                    .join('') +
                '</tbody></table>'
        };

        switch (this.type) {
            case 'a':
                this.childInfomationHTML = {};
                return this.list
                    .map((child) => {
                        this.childInfomationHTML[child] = divInnerHTML.a(child);
                        return `<div class="${child}">` + this.childInfomationHTML[child] + '</div>';
                    })
                    .join('');
            case 'ds':
                this.informationHTML = divInnerHTML.ds();
                return `<div class="show">${this.informationHTML}</div>`;
            default:
                console.warn('Unknown type: ' + this.type);
        }
    }
    getProlangsHTML() {
        return this.data.prolangs
            .map(
                (prolang, id) =>
                    `<button type="button" id="${id}" class="${prolang}" ` +
                    `title="${DATA.prolangConfig[prolang].name}">` +
                    `${DATA.prolangConfig[prolang].icon}</button>`
            )
            .join('');
    }
}

const main = {
    async init(app, fs) {
        this.config = CONFIG;
        this.typeList = Object.keys(this.config);

        await DATA.fetch(app, fs);
        this.renderData(app);
        this.render(app);
    },
    renderData(app) {
        app.get('/data/types', (req, res) => res.json(this.typeList));

        this.data = {};
        for (const lang of app.languages) {
            const searchData = [];
            for (const type of this.typeList)
                for (const key of this.config[type]) {
                    const textData = DATA.getPageData(lang, type, key).texts;
                    searchData.push(
                        [textData.NAME, `${type}/${key}`],
                        ...Object.keys(textData.list).map((child) => [
                            textData.list[child].name,
                            `${type}/${key}/${child}`
                        ])
                    );
                }
            app.get(`/${lang}/data/home/search`, (req, res) => res.json(searchData));
        }

        this.data.home = {content: {}};
        for (const lang of app.languages) {
            const contentData = [];
            for (const type of this.typeList)
                for (const key of this.config[type])
                    contentData.push([key, type, DATA.pages[type][key].texts[lang].NAME]);
            this.data.home.content[lang] = contentData;
        }
    },
    render(app) {
        for (const lang of app.languages) {
            for (const type of this.typeList) {
                for (const key of this.config[type]) new Page(app, lang, type, key);
                app.get(`/${lang}/${type}`, (req, res) => res.render('redirect'));
            }
        }
    }
};

export default main;
