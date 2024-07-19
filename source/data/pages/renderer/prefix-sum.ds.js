import fs from 'fs';

const data = JSON.stringify({
    prolangs: 'cpp,js',
    codes: {
        sum: {
            cpp: {
                main: [
                    '<span class="mtk6">const</span> <span class="mtk6">int</span> <span class="mtk10">MAXN</span> <span class="mtk3">=</span> <span class="mtk7">1e5</span><span class="mtk1">;</span>',
                    '<span class="mtk6">int</span> <span class="mtk10">prefixSum</span><span class="bracket-highlighting-0">[</span><span class="mtk10">MAXN</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">]</span><span class="mtk1">;</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">void</span> <span class="mtk16">build</span><span class="bracket-highlighting-0">(</span><span class="mtk6">int</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="bracket-highlighting-1">]</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">n</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk10">prefixSum</span><span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">int</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;=</span> <span class="mtk10">n</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span>',
                    '&tab2;<span class="mtk10">prefixSum</span><span class="bracket-highlighting-1">[</span><span class="mtk10">i</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk10">prefixSum</span><span class="bracket-highlighting-1">[</span><span class="mtk10">i</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">+</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">i</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">int</span> <span class="mtk16">getSum</span><span class="bracket-highlighting-0">(</span><span class="mtk6">int</span> <span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">right</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk18">return</span> <span class="mtk10">prefixSum</span><span class="bracket-highlighting-1">[</span><span class="mtk10">right</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">-</span> <span class="mtk10">prefixSum</span><span class="bracket-highlighting-1">[</span><span class="mtk10">left</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span>'
                ],
                usage: [
                    '<span class="mtk6">int</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">{</span><span class="mtk7">11</span><span class="mtk1">,</span> <span class="mtk7">6</span><span class="mtk1">,</span> <span class="mtk7">20</span><span class="mtk1">,</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                    '<span class="mtk6">int</span> <span class="mtk10">n</span> <span class="mtk3">=</span> <span class="mtk6">sizeof</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="bracket-highlighting-0">)</span> <span class="mtk3">/</span> <span class="mtk6">sizeof</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="bracket-highlighting-1">]</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
                    '<span class="mtk16">build</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">n</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
                    '<span class="mtk6">int</span> <span class="mtk10">result</span> <span class="mtk3">=</span> <span class="mtk16">getSum</span><span class="bracket-highlighting-0">(</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>'
                ]
            },
            js: {
                main: [
                    '<span class="mtk6">const</span> <span class="mtk19">MAXN</span> <span class="mtk3">=</span> <span class="mtk7">100000</span><span class="mtk1">;</span>',
                    '<span class="mtk6">const</span> <span class="mtk19">prefixSum</span> <span class="mtk3">=</span> <span class="mtk6">new</span> <span class="mtk17">Array</span><span class="bracket-highlighting-0">(</span><span class="mtk19">MAXN</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">const</span> <span class="mtk16">build</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk19">prefixSum</span><span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk7">0</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">let</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;=</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk10">length</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span>',
                    '&tab2;<span class="mtk19">prefixSum</span><span class="bracket-highlighting-1">[</span><span class="mtk10">i</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="mtk19">prefixSum</span><span class="bracket-highlighting-1">[</span><span class="mtk10">i</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">+</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk10">i</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '<span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                    '<span>&empty-line;</span>',
                    '<span class="mtk6">const</span> <span class="mtk16">getSum</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">(</span><span class="mtk10">left</span><span class="mtk1">,</span> <span class="mtk10">right</span><span class="bracket-highlighting-0">)</span> <span class="mtk6">=&gt;</span> <span class="mtk19">prefixSum</span><span class="bracket-highlighting-0">[</span><span class="mtk10">right</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">-</span> <span class="mtk19">prefixSum</span><span class="bracket-highlighting-0">[</span><span class="mtk10">left</span><span class="bracket-highlighting-0">]</span><span class="mtk1">;</span>'
                ],
                usage: [
                    '<span class="mtk6">const</span> <span class="mtk19">array</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">[</span><span class="mtk7">11</span><span class="mtk1">,</span> <span class="mtk7">6</span><span class="mtk1">,</span> <span class="mtk7">20</span><span class="mtk1">,</span> <span class="mtk7">1</span><span class="bracket-highlighting-0">]</span><span class="mtk1">;</span>',
                    '<span class="mtk16">build</span><span class="bracket-highlighting-0">(</span><span class="mtk19">array</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
                    '<span class="mtk6">const</span> <span class="mtk19">result</span> <span class="mtk3">=</span> <span class="mtk16">getSum</span><span class="bracket-highlighting-0">(</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>'
                ]
            }
        },
        'update-array': {
            cpp: {
                main: [
                    '<span class="mtk6">void</span> <span class="mtk16">updateArray</span><span class="bracket-highlighting-0">(</span><span class="mtk6">int</span> <span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="bracket-highlighting-1">]</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">n</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">operations</span><span class="bracket-highlighting-1">[</span><span class="bracket-highlighting-1">]</span><span class="bracket-highlighting-1">[</span><span class="mtk7">3</span><span class="bracket-highlighting-1">]</span><span class="mtk1">,</span> <span class="mtk6">int</span> <span class="mtk10">numOps</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk6">int</span> <span class="mtk10">prefixSum</span><span class="bracket-highlighting-1">[</span><span class="mtk10">n</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">=</span> <span class="bracket-highlighting-1">{</span><span class="mtk7">0</span><span class="bracket-highlighting-1">}</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">while</span> <span class="bracket-highlighting-1">(</span><span class="mtk10">numOps</span><span class="mtk3">--</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk6">int</span> <span class="mtk10">left</span> <span class="mtk3">=</span> <span class="mtk10">operations</span><span class="bracket-highlighting-2">[</span><span class="mtk10">numOps</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-2">[</span><span class="mtk7">0</span><span class="bracket-highlighting-2">]</span><span class="mtk1">,</span>',
                    '&tab2;<span class="mtk10">right</span> <span class="mtk3">=</span> <span class="mtk10">operations</span><span class="bracket-highlighting-2">[</span><span class="mtk10">numOps</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-2">[</span><span class="mtk7">1</span><span class="bracket-highlighting-2">]</span><span class="mtk1">,</span>',
                    '&tab2;<span class="mtk10">value</span> <span class="mtk3">=</span> <span class="mtk10">operations</span><span class="bracket-highlighting-2">[</span><span class="mtk10">numOps</span><span class="bracket-highlighting-2">]</span><span class="bracket-highlighting-2">[</span><span class="mtk7">2</span><span class="bracket-highlighting-2">]</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk10">prefixSum</span><span class="bracket-highlighting-2">[</span><span class="mtk10">left</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">+=</span> <span class="mtk10">value</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk10">prefixSum</span><span class="bracket-highlighting-2">[</span><span class="mtk10">right</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">-=</span> <span class="mtk10">value</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '&tab1;<span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">+=</span> <span class="mtk10">prefixSum</span><span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">int</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">n</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk10">prefixSum</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">+=</span> <span class="mtk10">prefixSum</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">+=</span> <span class="mtk10">prefixSum</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '<span class="bracket-highlighting-0">}</span>'
                ],
                usage: [
                    '<span class="mtk6">int</span> <span class="mtk10">array</span><span class="bracket-highlighting-0">[</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">{</span><span class="mtk7">4</span><span class="mtk1">,</span> <span class="mtk3">-</span><span class="mtk7">3</span><span class="mtk1">,</span> <span class="mtk7">5</span><span class="mtk1">,</span> <span class="mtk7">3</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="mtk1">,</span> <span class="mtk7">6</span><span class="mtk1">,</span> <span class="mtk7">9</span><span class="mtk1">,</span> <span class="mtk7">11</span><span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                    '<span class="mtk6">int</span> <span class="mtk10">n</span> <span class="mtk3">=</span> <span class="mtk6">sizeof</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="bracket-highlighting-0">)</span> <span class="mtk3">/</span> <span class="mtk6">sizeof</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="bracket-highlighting-1">]</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
                    '<span class="mtk6">int</span> <span class="mtk10">operations</span><span class="bracket-highlighting-0">[</span><span class="bracket-highlighting-0">]</span><span class="bracket-highlighting-0">[</span><span class="mtk7">3</span><span class="bracket-highlighting-0">]</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="bracket-highlighting-1">{</span><span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="bracket-highlighting-1">}</span><span class="mtk1">,</span>',
                    '&tab1;<span class="bracket-highlighting-1">{</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="bracket-highlighting-1">}</span><span class="mtk1">,</span>',
                    '&tab1;<span class="bracket-highlighting-1">{</span><span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk7">4</span><span class="mtk1">,</span> <span class="mtk7">5</span><span class="bracket-highlighting-1">}</span><span class="mtk1">,</span>',
                    '&tab1;<span class="bracket-highlighting-1">{</span><span class="mtk7">5</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="mtk1">,</span> <span class="mtk7">3</span><span class="bracket-highlighting-1">}</span><span class="mtk1">,</span>',
                    '&tab1;<span class="bracket-highlighting-1">{</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">6</span><span class="mtk1">,</span> <span class="mtk7">4</span><span class="bracket-highlighting-1">}</span><span class="bracket-highlighting-0">}</span><span class="mtk1">;</span>',
                    '<span class="mtk6">int</span> <span class="mtk10">numOps</span> <span class="mtk3">=</span> <span class="mtk6">sizeof</span><span class="bracket-highlighting-0">(</span><span class="mtk10">operations</span><span class="bracket-highlighting-0">)</span> <span class="mtk3">/</span> <span class="mtk6">sizeof</span><span class="bracket-highlighting-0">(</span><span class="mtk10">operations</span><span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="bracket-highlighting-1">]</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>',
                    '<span class="mtk16">updateArray</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">n</span><span class="mtk1">,</span> <span class="mtk10">operations</span><span class="mtk1">,</span> <span class="mtk10">numOps</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>'
                ]
            },
            js: {
                main: [
                    '<span class="mtk6">function</span> <span class="mtk16">updateArray</span><span class="bracket-highlighting-0">(</span><span class="mtk10">array</span><span class="mtk1">,</span> <span class="mtk10">operations</span><span class="bracket-highlighting-0">)</span> <span class="bracket-highlighting-0">{</span>',
                    '&tab1;<span class="mtk6">const</span> <span class="mtk19">prefixSum</span> <span class="mtk3">=</span> <span class="mtk6">new</span> <span class="mtk17">Array</span><span class="bracket-highlighting-1">(</span><span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk10">length</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-1">)</span><span class="mtk1">.</span><span class="mtk16">fill</span><span class="bracket-highlighting-1">(</span><span class="mtk7">0</span><span class="bracket-highlighting-1">)</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">const</span> <span class="bracket-highlighting-2">[</span><span class="mtk19">left</span><span class="mtk1">,</span> <span class="mtk19">right</span><span class="mtk1">,</span> <span class="mtk19">value</span><span class="bracket-highlighting-2">]</span> <span class="mtk6">of</span> <span class="mtk10">operations</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk19">prefixSum</span><span class="bracket-highlighting-2">[</span><span class="mtk19">left</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">+=</span> <span class="mtk19">value</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk19">prefixSum</span><span class="bracket-highlighting-2">[</span><span class="mtk19">right</span> <span class="mtk3">+</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">-=</span> <span class="mtk19">value</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '&tab1;<span class="mtk10">array</span><span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="bracket-highlighting-1">]</span> <span class="mtk3">+=</span> <span class="mtk19">prefixSum</span><span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="bracket-highlighting-1">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="mtk18">for</span> <span class="bracket-highlighting-1">(</span><span class="mtk6">let</span> <span class="mtk10">i</span> <span class="mtk3">=</span> <span class="mtk7">1</span><span class="mtk1">;</span> <span class="mtk10">i</span> <span class="mtk3">&lt;</span> <span class="mtk10">array</span><span class="mtk1">.</span><span class="mtk10">length</span><span class="mtk1">;</span> <span class="mtk10">i</span><span class="mtk3">++</span><span class="bracket-highlighting-1">)</span> <span class="bracket-highlighting-1">{</span>',
                    '&tab2;<span class="mtk19">prefixSum</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">+=</span> <span class="mtk19">prefixSum</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span> <span class="mtk3">-</span> <span class="mtk7">1</span><span class="bracket-highlighting-2">]</span><span class="mtk1">;</span>',
                    '&tab2;<span class="mtk10">array</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span> <span class="mtk3">+=</span> <span class="mtk19">prefixSum</span><span class="bracket-highlighting-2">[</span><span class="mtk10">i</span><span class="bracket-highlighting-2">]</span><span class="mtk1">;</span>',
                    '&tab1;<span class="bracket-highlighting-1">}</span>',
                    '<span class="bracket-highlighting-0">}</span>'
                ],
                usage: [
                    '<span class="mtk6">const</span> <span class="mtk19">array</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">[</span><span class="mtk7">4</span><span class="mtk1">,</span> <span class="mtk3">-</span><span class="mtk7">3</span><span class="mtk1">,</span> <span class="mtk7">5</span><span class="mtk1">,</span> <span class="mtk7">3</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="mtk1">,</span> <span class="mtk7">6</span><span class="mtk1">,</span> <span class="mtk7">9</span><span class="mtk1">,</span> <span class="mtk7">11</span><span class="bracket-highlighting-0">]</span><span class="mtk1">;</span>',
                    '<span class="mtk6">const</span> <span class="mtk19">operations</span> <span class="mtk3">=</span> <span class="bracket-highlighting-0">[</span>',
                    '&tab1;<span class="bracket-highlighting-1">[</span><span class="mtk7">0</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="bracket-highlighting-1">]</span><span class="mtk1">,</span>',
                    '&tab1;<span class="bracket-highlighting-1">[</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk3">-</span><span class="mtk7">1</span><span class="bracket-highlighting-1">]</span><span class="mtk1">,</span>',
                    '&tab1;<span class="bracket-highlighting-1">[</span><span class="mtk7">2</span><span class="mtk1">,</span> <span class="mtk7">4</span><span class="mtk1">,</span> <span class="mtk7">5</span><span class="bracket-highlighting-1">]</span><span class="mtk1">,</span>',
                    '&tab1;<span class="bracket-highlighting-1">[</span><span class="mtk7">5</span><span class="mtk1">,</span> <span class="mtk7">7</span><span class="mtk1">,</span> <span class="mtk7">3</span><span class="bracket-highlighting-1">]</span><span class="mtk1">,</span>',
                    '&tab1;<span class="bracket-highlighting-1">[</span><span class="mtk7">1</span><span class="mtk1">,</span> <span class="mtk7">6</span><span class="mtk1">,</span> <span class="mtk7">4</span><span class="bracket-highlighting-1">]</span>',
                    '<span class="bracket-highlighting-0">]</span><span class="mtk1">;</span>',
                    '<span class="mtk16">updateArray</span><span class="bracket-highlighting-0">(</span><span class="mtk19">array</span><span class="mtk1">,</span> <span class="mtk19">operations</span><span class="bracket-highlighting-0">)</span><span class="mtk1">;</span>'
                ]
            }
        }
    },
    complexitys: {
        sum: {},
        'update-array': {}
    },
    commentCodes: {}
});

await fs.writeFileSync('./source/data/pages/prefix-sum.ds.json', data);

console.log('Done!');