import fetch from 'node-fetch'
import axios from 'axios'
import fs from 'fs'

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let chat = global.db.data.chats[m.chat]
  m.reply(wait)
  await conn.reply(m.chat, `Loading...`, 0, {
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        mediaUrl: '',
        mediaType: 2,
        description: sgc,
        title: global.wm,
        body: 'Nih Kak', //`${fileSizeH}`,
        sourceUrl: snh,
        thumbnail: fs.readFileSync('./kongede.jpg')
      }
    }
  })
  let url = `https://api.zeeoneofc.xyz/api/downloader/tiktok?url=https://t.tiktok.com/i18n/share/video/7050032845158403354/?region=ID&mid=7028787667471010587&u_code=dkck2mgka0lmkh&preview_pb=0&language=id&_d=dm347b2b5m8daf&share_item_id=7050032845158403354&source=h5_t&timestamp=1641508306&user_id=7003032823783277595&sec_user_id=MS4wLjABAAAAQVcSMWZtoLQ3qqF4wHQOtvq8VoOQGmOor9X-gZgltrkCNbjbmOS-fjVR1gX0Dep9&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7038903817816540955&share_link_id=0a8b0672-dcb7-494f-8659-102e11d39d1f&share_app_id=1180&apikey=liuuuOYJ&url=${args[0]}`
  let txt = `🚀 *Link:* ${await (await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}`
  await conn.sendFile(m.chat, url, 'tiktokaudio.mp3', `

 *TIKTOK MP3*

• *Judul:* 
• *Type:* MP3
• *📥 Ukuran File:* 

`.trim(), m, null, {
    document: { url }, mimetype: 'audio/mpeg', fileName: 'tiktok.mp3', conntextInfo: {
      externalAdReply: {
        title: '▶︎ ━━━━━━━•────────────────── ',
        body: 'Now Playing...',
        description: 'Now Playing...',
        mediaType: 2,
        thumbnail: await (await fetch('https://telegra.ph/file/9e323ad1f4b2d52579416.jpg')).buffer(),
        mediaUrl: `https://youtu.be/E1nLzgkOH8A`
      }
    }
  })
}
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(a(udio)?|mp3|sound)(dl)?(download(er)?)?$/i

handler.limit = true

export default handler
