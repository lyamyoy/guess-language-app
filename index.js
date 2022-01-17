import { franc } from 'franc';
import pkg from 'langs';
const langs = pkg;

import 'colors';

const arg = process.argv[2];
const franc_code = franc(arg);

if (franc_code === 'und') {
    console.log('解析できませんでした。違う文章でもう一度試してください。'.red);
} else {
    try {
        const langs_dict = langs.where('3', franc_code);
        console.log(`${langs_dict.name}`.green);
    } catch {
        console.log('!!! langs module cant handle this'.yellow);
    }
}
