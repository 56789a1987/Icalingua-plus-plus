import path from 'path'

const map = new Map<string, number>([
    ['[打call]请使用最新版手机QQ体验新功能', 1],
    ['[变形]请使用最新版手机QQ体验新功能', 2],
    ['[嗑到了]请使用最新版手机QQ体验新功能', 3],
    ['[仔细分析]请使用最新版手机QQ体验新功能', 4],
    ['[加油]请使用最新版手机QQ体验新功能', 5],
    ['[我没事]请使用最新版手机QQ体验新功能', 6],
    ['[菜汪]请使用最新版手机QQ体验新功能', 7],
    ['[崇拜]请使用最新版手机QQ体验新功能', 8],
    ['[比心]请使用最新版手机QQ体验新功能', 9],
    ['[庆祝]请使用最新版手机QQ体验新功能', 10],
    ['[老色痞]请使用最新版手机QQ体验新功能', 11],
    ['[吃糖]请使用最新版手机QQ体验新功能', 12],
    ['[篮球]请使用最新版手机QQ体验新功能', 13],
    ['[惊吓]请使用最新版手机QQ体验新功能', 14],
    ['[生气]请使用最新版手机QQ体验新功能', 15],
    ['[流泪]请使用最新版手机QQ体验新功能', 16],
    ['[蛋糕]请使用最新版手机QQ体验新功能', 17],
    ['[鞭炮]请使用最新版手机QQ体验新功能', 18],
    ['[烟花]请使用最新版手机QQ体验新功能', 19],
    ['[我想开了]请使用最新版手机QQ体验新功能', 20],
    ['[舔屏]请使用最新版手机QQ体验新功能', 21],
    ['[花朵脸]请使用最新版手机QQ体验新功能', 22],
])

export default (msgText: string): string => {
    const id = map.get(msgText)
    if (id) {
        const i = String(id)
        // @ts-ignore
        return path.join(__static, 'qlottie', i, i + '.json')
    }
}
