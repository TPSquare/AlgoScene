'use strict';

import localData from './local-data.js';
import MODULES from 'https://tpsw.000webhostapp.com/modules.js';

localData.init('./');

const langData = Object.assign(
    await fetch(`./languages/${localData.lang}/index.json`).then(async (r) => r.json()),
    await fetch(`./languages/${localData.lang}/general.json`).then(async (r) => r.json())
);

const A = {names: await fetch('./a/list.json').then((res) => res.json())};
A.data = await Promise.all(
    A.names.map(async (fileName) => {
        const url = `./languages/${localData.lang}/a/${fileName}.json`;
        return await fetch(url).then((res) => res.json());
    })
);

new (class {
    constructor() {
        this.document();
        this.window();
        this.header();
        this.popup();
        this.main();
        this.algorithms();
    }
    document() {
        document.querySelector('html').lang = localData.lang;

        MODULES.upgradeDocument();
    }
    window() {
        MODULES.upgradeWindow();
    }
    header() {
        const title = document.createElement({
                className: 'title',
                innerHTML:
                    'ALGOSCENE<img src="./static/name.svg" alt="">' +
                    '<svg class="decorate" viewBox="0 0 297.5 108" xmlns="http://www.w3.org/2000/svg"><path d="M 89.421631,0 0,108 H 140.82823 L 229.83149,0.49609375 H 230 V 0 Z" style="fill:#ffffff;fill-opacity:0.103753;stroke-width:1" id="path1" /><path d="M 156.92163,0 67.5,108 H 208.32823 L 297.33149,0.49609375 H 297.5 V 0 Z" style="fill:#ffffff;fill-opacity:0.103753;stroke-width:1" id="path2" /></svg>',
            }),
            left = document.createElement({className: 'left', children: [title]});

        const langBtn = document.createElement({
                tag: 'button',
                type: 'button',
                className: 'lang',
                title: langData.language,
                innerHTML: localData.lang.toUpperCase(),
                onclick() {
                    if (this.innerHTML == 'EN') this.innerHTML = 'VI';
                    else this.innerHTML = 'EN';
                    localData.setLanguage(this.innerHTML.toLowerCase());
                },
            }),
            infoBtn = document.createElement({
                tag: 'button',
                type: 'button',
                className: 'info',
                title: langData.info___,
                innerHTML:
                    '<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" stroke-width="6.67279" style="fill:none;stroke-width:12.073;stroke-dasharray:none" id="circle1" r="57.963501" /><path stroke-linecap="round" stroke-width="6.67279" d="m 55.368515,92.095025 h 9.578464 m 0,0 V 60.965039 c 0,-1.76346 0.622361,-2.877238 -1.141033,-2.877238 h -3.684424 m 4.825457,34.007224 h 9.578463" id="path1" sodipodi:nodetypes="cccssccc" style="stroke-width:11.273;stroke-dasharray:none" /><ellipse cx="63.526512" cy="37.510479" id="circle2" style="stroke-width:3.3;stroke-dasharray:none" rx="7.9820528" ry="7.9820533" /></svg>',
                onclick: () => document.body.popup.info.handle(),
            }),
            right = document.createElement({
                className: 'right',
                innerHTML:
                    '<svg class="decorate" viewBox="0 0 297.5 108" xmlns="http://www.w3.org/2000/svg"><path d="M 89.421631,0 0,108 H 140.82823 L 229.83149,0.49609375 H 230 V 0 Z" style="fill:#ffffff;fill-opacity:0.103753;stroke-width:1" id="path1" /><path d="M 156.92163,0 67.5,108 H 208.32823 L 297.33149,0.49609375 H 297.5 V 0 Z" style="fill:#ffffff;fill-opacity:0.103753;stroke-width:1" id="path2" /></svg>',
                children: [langBtn, infoBtn],
            });

        const header = document.createElement({tag: 'header', children: [left, right]});

        document.body.appendChild(header);
    }
    algorithms() {
        let html = '';
        A.names.forEach(
            (key, index) =>
                (html +=
                    `<a href="./a/${key}">` +
                    `<img src="./static/a/${key}.jpg" alt="">` +
                    `<span>${A.data[index].NAME}</span>` +
                    `</a>`)
        );

        const algorithms = document.createElement({
            tag: 'section',
            id: 'algorithms',
            innerHTML: html,
        });

        document.body.appendChild(algorithms);
    }
    main() {
        const above = document.createElement({
            className: 'above',
            innerHTML: langData.above,
        });

        const input = document.createElement({
            tag: 'input',
            id: 'search',
            type: 'search',
            attributes: {
                dir: 'ltr',
                spellcheck: false,
                autocorrect: 'off',
                autocomplete: 'off',
                autocapitalize: 'off',
                maxlength: 2048,
                tabindex: 1,
            },
        });

        const info = document.createElement({
            tag: 'span',
            className: 'info',
            innerHTML: `© 2024 TPSquare v${localData.version}`,
        });

        const main = document.createElement({tag: 'main', children: [above, input, info]});

        document.body.appendChild(main);

        const autoCompleteJS = new autoComplete({
            selector: '#search',
            placeHolder: langData.search,
            data: {
                src: (async () => {
                    const fileList = A.names;
                    const res = A.data;
                    const LIST = res.map((obj, index) => {
                        const keys = Object.keys(obj);
                        keys.splice(
                            keys.findIndex((key) => key == '_'),
                            1
                        );
                        keys.splice(
                            keys.findIndex((key) => key == 'NAME'),
                            1
                        );
                        return keys
                            .map((key) => {
                                obj[key].name = Object.assign(obj[key].name, {
                                    key: fileList[index],
                                });
                                return obj[key].name;
                            })
                            .concat([Object.assign(fileList[index], {key: fileList[index]})]);
                    });
                    let data = [];
                    LIST.forEach((list) => (data = data.concat(list)));
                    return data;
                })(),
                cache: true,
            },
            resultItem: {
                highlight: true,
            },
        });
        autoCompleteJS.input.addEventListener('selection', function (e) {
            window.location.href = `./a/${e.detail.selection.value.key}`;
        });
    }
    popup() {
        const overlay = document.createElement({
            tag: 'span',
            className: 'overlay',
            handle() {
                if (this.classList.contains('show')) this.classList.remove('show');
                else this.classList.add('show');
            },
        });

        function handle() {
            if (this.classList.contains('show')) this.classList.remove('show');
            else this.classList.add('show');
            overlay.handle();
        }

        const closeConfig = {
            tag: 'button',
            type: 'button',
            className: 'close',
            title: langData.close,
            innerHTML: '&times;',
            onclick() {
                this.parentNode.handle();
            },
        };

        const logoHTML = '<div class="logo"><img src="./static/logo-with-name.svg" alt=""></div>',
            lineHTML = '<div class="line"></div>';

        const newParagraph = (content) => {
            switch (localData.lang) {
                case 'vi':
                    return `<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${content}</span>`;
                case 'en':
                    return `<span>${content}</span>`;
            }
        };

        const info = document.createElement({
            className: 'info',
            key: 'info',
            children: [
                document.createElement(closeConfig),
                document.createElement({
                    tag: 'fieldset',
                    innerHTML:
                        `<legend>${langData.info___}</legend>` +
                        logoHTML +
                        newParagraph(langData.paragraph1) +
                        newParagraph(langData.paragraph2) +
                        lineHTML +
                        newParagraph(langData.paragraph3) +
                        `<ul class="contact-box">
                            <li class="email"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg><a href="mailto:tps201cn@gmail.com">tps201cn@gmail.com</a></li>
                            <li class="form"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg><a href="https://forms.gle/3AuzDd1ELquCPyWy8" target="_blank">${langData.googleForms}</a></li>
                        </ul>` +
                        lineHTML +
                        newParagraph(langData.developmentTeam + ':') +
                        `<ul class="development-team">
                            <li>TPSquare - ${langData.leadDeveloper}</li>
                            <li>Hbat - ${langData.graphicDesigner}</li>
                        </ul>` +
                        lineHTML +
                        `<div class="footer"><span>© ${langData.copyright___} TPSquare</span><span>${langData.version}: ${localData.version}</span></div>`,
                }),
            ],
            handle,
        });

        const popup = document.createElement({
            id: 'popup',
            key: 'popup',
            children: [overlay, info],
        });

        document.body.appendChild(popup);
    }
})();
