import fs from 'fs'
import deepai from 'deepai'
deepai.setApiKey('31c3da72-e27e-474c-b2f4-a1b685722611')

let handler = async (m) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (!mime) throw 'Reply Gambarnya'
    await m.reply(global.wait)
	if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
	let img = mime.split('/')[1]
	img = Date.now() + '.' + img
	fs.writeFileSync(`./${img}`, await q.download())
	let resp = await deepai.callStandardApi('waifu2x', {
		image: fs.readFileSync(`./${img}`)
	})
	await conn.sendFile(m.chat, resp.output_url, 'hd.jpg', 'Hasilnya..', m).then(() => fs.unlinkSync(`./${img}`))
}
handler.help = ['hd']
handler.tags = ['tools']
handler.command = /^(hd)$/i

export default handler
