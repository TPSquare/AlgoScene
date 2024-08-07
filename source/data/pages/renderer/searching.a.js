import fs from 'fs';

const data = JSON.stringify({
    prolangs: 'js,cpp,py',
    codes: {
        sequential: {
            js: {
                main: [
                    '<span class="mtk6">const</span> <span class="mtk16">sequentialSearch</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">target</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">let</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk10">length</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">==</span> <span class="mtk10">target</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span> <span class="mtk10">i</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>'
                ],
                usage: [
                    '<span class="mtk6">const</span> <span class="mtk19">array</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">[</span><span class="mtk7">5</span><span class="mtk1">,</span> <span class="mtk7">9</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk7">4</span><span class="mtk1">,</span> <span class="mtk7">11</span><span class="mtk1">,</span> <span class="mtk7">6</span><span class="mtk1">,</span> <span class="mtk7">8</span><span class="mtk1">,</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">12</span><span class="mtk1">,</span> <span class="mtk7">3</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="mtk1">,</span> <span class="mtk7">10</span><span class="bracket-highlighting-0">]</span><span class="mtk1">,</span>',
                    '&tab1;<span class="mtk19">result</span> <span class="mtk3">=</span> <span class="mtk16">sequentialSearch</span><span class="bracket-highlighting-0">(</span><span class="mtk19">array</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>'
                ]
            },
            cpp: {
                main: [
                    '<span class="mtk5">// include: vector</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">int</span> <span class="mtk16">sequentialSearch</span><span class="bracket-highlighting-0">(</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">&gt;</span> <span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">target</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">int</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">==</span> <span class="mtk10">target</span><span class="bracket-highlighting-1">)</span> <span class="mtk18">return</span> <span class="mtk10">i</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>'
                ],
                usage: [
                    '<span class="mtk17">vector</span><span class="mtk3">&lt;</span><span class="mtk6">int</span><span class="mtk3">&gt;</span> <span class="mtk10">array</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">{</span><span class="mtk7">5</span><span class="mtk1">,</span> <span class="mtk7">9</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk7">4</span><span class="mtk1">,</span> <span class="mtk7">11</span><span class="mtk1">,</span> <span class="mtk7">6</span><span class="mtk1">,</span> <span class="mtk7">8</span><span class="mtk1">,</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">12</span><span class="mtk1">,</span> <span class="mtk7">3</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="mtk1">,</span> <span class="mtk7">10</span><span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                    '<span class="mtk6">int</span> <span class="mtk10">result</span> <span class="mtk3">=</span> <span class="mtk16">sequentialSearch</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>'
                ]
            },
            py: {
                main: [
                    '<span class="mtk6">def</span> <span class="mtk16">sequential_search</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">target</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="mtk10">i</span> <span class="mtk18">in</span> <span class="mtk17">range</span><span class="bracket-highlighting-0">(</span><span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk16">len</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="bracket-highlighting-1">)</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">i</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">==</span> <span class="mtk10">target</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk18">return</span> <span class="mtk10">i</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="mtk3">-</span><span class="mtk7">1</span>'
                ],
                usage: [
                    '<span class="mtk10">array</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">[</span><span class="mtk7">5</span><span class="mtk1">,</span> <span class="mtk7">9</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk7">4</span><span class="mtk1">,</span> <span class="mtk7">11</span><span class="mtk1">,</span> <span class="mtk7">6</span><span class="mtk1">,</span> <span class="mtk7">8</span><span class="mtk1">,</span> <span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">12</span><span class="mtk1">,</span> <span class="mtk7">3</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="mtk1">,</span> <span class="mtk7">10</span><span class="bracket-highlighting-0">]</span>',
                    '<span class="mtk10">result</span> <span class="mtk3">=</span> <span class="mtk16">sequential_search</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="bracket-highlighting-0">)</span>'
                ]
            }
        },
        binary: {
            js: {
                main: [
                    '<span class="mtk6">const</span> <span class="mtk16">binarySearch</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">target</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk6">let</span> <span class="mtk10">left</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">,</span>',
                    '&tab2;<span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk10">length</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">left</span> <span class="mtk3">&lt;=</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk6">const</span> <span class="mtk19">middle</span> <span class="mtk3">=</span> <span class="mtk10">Math</span><span class="mtk1">.</span><span class="mtk16">floor</span><span class="bracket-highlighting-2">(</span><span class="bracket-highlighting-3">(</span><span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk10">right</span><span class="bracket-highlighting-3">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="bracket-highlighting-2">)</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk19">middle</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">==</span> <span class="mtk10">target</span><span class="bracket-highlighting-2">)</span> <span class="mtk18">return</span> <span class="mtk19">middle</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk19">middle</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">&lt;</span> <span class="mtk10">target</span><span class="bracket-highlighting-2">)</span> <span class="mtk10">left</span> <span class="mtk3">=</span> <span class="mtk19">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">else</span> <span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk19">middle</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>'
                ],
                usage: [
                    '<span class="mtk6">const</span> <span class="mtk19">array</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">[</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk7">3</span><span class="mtk1">,</span> <span class="mtk7">4</span><span class="mtk1">,</span> <span class="mtk7">5</span><span class="mtk1">,</span> <span class="mtk7">6</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="mtk1">,</span> <span class="mtk7">8</span><span class="mtk1">,</span> <span class="mtk7">9</span><span class="mtk1">,</span> <span class="mtk7">10</span><span class="mtk1">,</span> <span class="mtk7">11</span><span class="mtk1">,</span> <span class="mtk7">12</span><span class="bracket-highlighting-0">]</span><span class="mtk1">,</span>',
                    '&tab1;<span class="mtk19">result</span> <span class="mtk3">=</span> <span class="mtk16">sequentialSearch</span><span class="bracket-highlighting-0">(</span><span class="mtk19">array</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>'
                ]
            },
            cpp: {
                main: [
                    '<span class="mtk5">// include: vector</span>',
                    '<span class="mtk5">// namespace: std</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">int</span> <span class="mtk16">binarySearch</span><span class="bracket-highlighting-0">(</span><span class="mtk17">vector</span><span class="mtk1">&lt;</span><span class="mtk6">int</span><span class="mtk1">&gt;</span> <span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">target</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">left</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">,</span>',
                    '&tab2;<span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk16">size</span><span class="bracket-highlighting-1">(</span><span class="bracket-highlighting-1">)</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">left</span> <span class="mtk3">&lt;=</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk6">int</span> <span class="mtk10">middle</span> <span class="mtk3">=</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk10">right</span><span class="bracket-highlighting-2">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">middle</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">==</span> <span class="mtk10">target</span><span class="bracket-highlighting-2">)</span> <span class="mtk18">return</span> <span class="mtk10">middle</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="bracket-highlighting-2">(</span><span class="mtk10">array</span><span class="bracket-highlighting-3">[</span><span class="mtk10">middle</span><span class="bracket-highlighting-3">]</span> <span class="mtk3">&lt;</span> <span class="mtk10">target</span><span class="bracket-highlighting-2">)</span> <span class="mtk10">left</span> <span class="mtk3">=</span> <span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk18">else</span> <span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk10">middle</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>'
                ],
                usage: [
                    '<span class="mtk17">vector</span><span class="mtk3">&lt;</span><span class="mtk6">int</span><span class="mtk3">&gt;</span> <span class="mtk10">array</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">{</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk7">3</span><span class="mtk1">,</span> <span class="mtk7">4</span><span class="mtk1">,</span> <span class="mtk7">5</span><span class="mtk1">,</span> <span class="mtk7">6</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="mtk1">,</span> <span class="mtk7">8</span><span class="mtk1">,</span> <span class="mtk7">9</span><span class="mtk1">,</span> <span class="mtk7">10</span><span class="mtk1">,</span> <span class="mtk7">11</span><span class="mtk1">,</span> <span class="mtk7">12</span><span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                    '<span class="mtk6">int</span> <span class="mtk10">result</span> <span class="mtk3">=</span> <span class="mtk16">binarySearch</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>'
                ]
            },
            py: {
                main: [
                    '<span class="mtk6">def</span> <span class="mtk16">binary_search</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">target</span><span class="bracket-highlighting-0">)</span><span class="mtk1">:</span>',
                    '&tab1;<span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk16">len</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="bracket-highlighting-0">)</span> <span class="mtk3">-</span> <span class="mtk7">1</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="mtk10">left</span> <span class="mtk3">&lt;=</span> <span class="mtk10">right</span><span class="mtk1">:</span>',
                    '&tab2;<span class="mtk10">middle</span> <span class="mtk3">=</span> <span class="mtk17">int</span><span class="bracket-highlighting-0">(</span><span class="bracket-highlighting-1">(</span><span class="mtk10">left</span> <span class="mtk3">+</span> <span class="mtk10">right</span><span class="bracket-highlighting-1">)</span> <span class="mtk3">/</span> <span class="mtk7">2</span><span class="bracket-highlighting-0">)</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">middle</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">==</span> <span class="mtk10">target</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk18">return</span> <span class="mtk10">middle</span>',
                    '&tab2;<span class="mtk18">if</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="mtk10">middle</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">&lt;</span> <span class="mtk10">target</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk10">left</span> <span class="mtk3">=</span> <span class="mtk10">middle</span> <span class="mtk3">+</span> <span class="mtk7">1</span>',
                    '&tab2;<span class="mtk18">else</span><span class="mtk1">:</span>',
                    '&tab3;<span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk10">middle</span> <span class="mtk3">-</span> <span class="mtk7">1</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="mtk3">-</span><span class="mtk7">1</span>'
                ],
                usage: [
                    '<span class="mtk10">array</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">[</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk7">3</span><span class="mtk1">,</span> <span class="mtk7">4</span><span class="mtk1">,</span> <span class="mtk7">5</span><span class="mtk1">,</span> <span class="mtk7">6</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="mtk1">,</span> <span class="mtk7">8</span><span class="mtk1">,</span> <span class="mtk7">9</span><span class="mtk1">,</span> <span class="mtk7">10</span><span class="mtk1">,</span> <span class="mtk7">11</span><span class="mtk1">,</span> <span class="mtk7">12</span><span class="bracket-highlighting-0">]</span>',
                    '<span class="mtk10">result</span> <span class="mtk3">=</span> <span class="mtk16">binary_search</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="bracket-highlighting-0">)</span>'
                ]
            }
        }
    },
    complexitys: {
        sequential: {
            average: 'n',
            best: '1',
            worst: 'n',
            space: '1'
        },
        binary: {
            average: 'log n',
            best: '1',
            worst: 'log n',
            space: '1'
        }
    },
    commentCodes: {
        sqts: 'mtk16|sequentialSearch',
        sqt_s: 'mtk16|sequential_search',
        bnrs: 'mtk16|binarySearch',
        bnr_s: 'mtk16|binary_search',
        target: 'mtk10|target',
        i: 'mtk10|i',
        left: 'mtk10|left',
        right: 'mtk10|right',
        middle: 'mtk10|middle',
        middlejs: 'mtk19|middle',
        minus1: ['-', 'mtk7|1'],
        middleminus1: ['mtk10|middle', ' ', '-', ' ', 'mtk7|1'],
        middleplus1: ['mtk10|middle', ' ', '+', ' ', 'mtk7|1'],
        middlejsminus1: ['mtk19|middle', ' ', '-', ' ', 'mtk7|1'],
        middlejsplus1: ['mtk19|middle', ' ', '+', ' ', 'mtk7|1']
    }
});

await fs.writeFileSync('./source/data/pages/searching.a.json', data);

console.log('Done!');
