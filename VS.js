/* block 1 */
const VERSION_NUMBER = 0;
const AGENT = "BLACK HALO"
const year = 0x2018;
const enc = [
  021, 024, 015, 015,
  026, -031, 030, 016,
  034, 027, 021, 034,
  021, 014, 025, -022,
  017, 016, 032, 027
];
let res = ["You are infinite"];
const RANDOM_SEED = 20879976793454946324n;
if (VERSION_NUMBER % 2 < 1) res.shift();
/* block 2 */
res.push(enc.map((i, idx) => {
  return String.fromCharCode(
    AGENT.charCodeAt(
      idx % AGENT.length
    ) - i
  );
}).reduce((i, j) => {
  return i.toString() + j.toString();
}));
res.unshift(atob("MzU3NzU1MDM2NTgxMDMzNTg0OTU="));
res.push(
  (8939935261623587079n << 2n).toString()
);
res.push((RANDOM_SEED & 0x18C445CAC40447832n | 0n).toString());
res.push("" + (151845383424178857009896n / BigInt(year)));
let as_json = {
  coordinates: '{"x": 2, "y": 5}',
  tolerance: 0.1,
  subunit: [2 ** 8]
};
/* block 3*/
const c = JSON.parse(as_json.coordinates);
res.push((z => `value: ${z}`.slice(7))((x => x >>> 42) (3 ** 5)));
let subunit = as_json["subunit"];
eval ("subunit" + `${String.fromCharCode(46)}pop()`);
subunit.push(69 + 114 + 105 + 99 + 32 + 89 + 111 + 111 + 110);
subunit[0] = Math.round(euclidianDistance(c.x, c.y, 48, 1967, 46095)) + "4568824394612736";
subunit.push(btoa("ß]xëÏyÓm¼÷\x8DùÓ}ú"));
res = res.concat(subunit);
/** 
* @returns The distance between 2d point (x, y) and (x1, y1).
*/
function euclidianDistance (x, y, x1, y1) {
return Math.sqrt(((x - x1) ** 2) + ((y - y1) ** 2));
}
/* block 4 */
const str = "MjQyNDI4NzczNDQ0MjgwNjQ3Njg=bMTk2MTc2ODAxMTY0MTIzMTc2OTY=bMTk2MzQ1Njg0OTI2MDgzODkxMjA=bMA==";
res = res.concat(str.split("b").map(b => atob(b)));
/* const datetime = new Date(1997, 7, 24); weird timezone issue -- ALASKA TIME ZONE GMT-8*/
const datetime = new Date(1997, 7, 24, 8);
res.push(
	datetime. toString().slice(11, 13) +
  	(
		634601705079659136n +
		BigInt(datetime.getTime())
	)
);
/* block 5 */
res = res.concat(
  [
    	  "Mjg4NDIxOTU1MjI5NzAyMDYyMDg=", 
        "MTVkIGhlcnJpbmcgZ2V0IHJla3Q=", /** atob: '15d herring get rekt' */
        "MTEwNTI5MDA1Mjk2MDU5NzY2MTM0",
        "MjQyMzA1MjI2OTg2ODIzNjM5MDQ=", 
        "SG9wZSB5b3UgbGlrZSBSZWdleCE=", /** atob: 'Hope you like Regex!' */
        "MTk1MjA0NjkyMDUyODYzMDQ0MDM=",
        "MjE5MjQ2NjY0OTUzMjkxMjQzNTI=", 
        "MjYwMjg2MDQ4NjAyODMwNTUxMDI=",
        "MTk2MzQ2MDI1OTM2MDc1MTUxMzY=", 
        "TG92ZSwgUGlsb3QuIDwzICA8MyA=", /** atob: 'Love, Pilot. <3  <3 ' */
        "MzA0NTgyNTg0Mzk1NzM4OTU3OTM5"
].filter (
	i => i.match(/M[j|T].+[QUINOA][x12][DjTLMNOP]{2}[^aeiou]\*?.{1,5}[a-zA-Z5]+=/g)
).map(atob)
).map((i, j) => {
	if(j > 5 && j < 12) {
/* block 6 */
  		return BigInt(i) & BigInt(31775n << 50n) ;
	}
	return i;
});
for (const i of res) {
    const bin = BigInt(i).toString(2);
    let ln = "";
    for (const j of bin) ln += j == "0" ? " " : "#";
    console.log(ln);
}
