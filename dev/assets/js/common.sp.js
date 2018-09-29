/*
 * importしたモジュールに依存する場合は、
 * 当ファイル内に記述する。
*/

const sample = 'sample';

const sampleFn = () => {
    console.log(sample);
}

window.addEventListener('load', sampleFn, false);