const { cmd,getBuffer, tlang, botpic, prefix, Config } = require('../lib')

const util = require('util');
const fs = require('fs-extra');
const axios = require('axios')
const fetch = require('node-fetch');
const {TelegraPh} = require('../lib/scraper')

//=====================================================================
async function Create_Url(Void, citel, name = 'ad' )
{
const _0x1dace8=_0x367a;function _0x26f1(){const _0xc64de5=['13444AIecxl','*_Error\x20While\x20Editing\x20Image_*\x0a*_Error\x20Reason\x20:_*\x20','decodeJid','73960soGYOX','1575683OEYqHN','downloadAndSaveMediaMessage','441OEclfF','2919707oQNBfX','2013754aJnIXK','1431KTrARE','chat','https://api.popcat.xyz/','log','414405PoGxef','102nAAbWk','sendMessage','caption','25900960cLaQwa','user'];_0x26f1=function(){return _0xc64de5;};return _0x26f1();}(function(_0x329471,_0x5242ae){const _0x5c4371=_0x367a,_0x3e57c8=_0x329471();while(!![]){try{const _0x5ee4e5=-parseInt(_0x5c4371(0x1ae))/0x1+-parseInt(_0x5c4371(0x1b2))/0x2+-parseInt(_0x5c4371(0x1b0))/0x3*(-parseInt(_0x5c4371(0x1aa))/0x4)+parseInt(_0x5c4371(0x1b7))/0x5*(parseInt(_0x5c4371(0x1b8))/0x6)+parseInt(_0x5c4371(0x1b1))/0x7+-parseInt(_0x5c4371(0x1ad))/0x8*(parseInt(_0x5c4371(0x1b3))/0x9)+parseInt(_0x5c4371(0x1bb))/0xa;if(_0x5ee4e5===_0x5242ae)break;else _0x3e57c8['push'](_0x3e57c8['shift']());}catch(_0xc85b5d){_0x3e57c8['push'](_0x3e57c8['shift']());}}}(_0x26f1,0xd167e));function _0x367a(_0x360a35,_0x1b3585){const _0x26f1a0=_0x26f1();return _0x367a=function(_0x367ac4,_0x26bfaf){_0x367ac4=_0x367ac4-0x1a9;let _0x294bf7=_0x26f1a0[_0x367ac4];return _0x294bf7;},_0x367a(_0x360a35,_0x1b3585);}try{let media=await Void[_0x1dace8(0x1af)](citel['quoted']),sᴜʜᴀɪʟ_ᴍᴅ=await TelegraPh(media);try{await fs['unlinkSync'](media);}catch(_0x5c9f39){}return await Void[_0x1dace8(0x1b9)](citel[_0x1dace8(0x1b4)],{'image':{'url':_0x1dace8(0x1b5)+name+'?image='+sᴜʜᴀɪʟ_ᴍᴅ},'caption':Config[_0x1dace8(0x1ba)]},{'quoted':citel});}catch(_0x4b7516){console[_0x1dace8(0x1b6)](_0x4b7516);const botNumber=await Void[_0x1dace8(0x1ac)](Void[_0x1dace8(0x1a9)]['id']);return await Void[_0x1dace8(0x1b9)](botNumber,{'text':_0x1dace8(0x1ab)+_0x4b7516},{'quoted':citel});}

} 
cmd({ pattern: "ad", alias :["معروف","مشهور"], category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text , { cmdName,args, isCreator, body, budy }) => {
    if (!citel.quoted) return await citel.reply(`*֎╎رد عـلـي صـوره*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("*֎╎رد عـلـي صـوره*");
    await Create_Url(Void, citel , 'ad'); 
})
//=============================================================================
cmd({ pattern: "jail", alias :["مسجون","سجن"], category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*֎╎رد عـلـي صـوره*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("*֎╎رد عـلـي صـوره*");
    await Create_Url(Void, citel , 'jail'); 
})

//=============================================================================
cmd({ pattern: "clown", alias :["كرتون"], category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*֎╎رد عـلـي صـوره*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("*֎╎رد عـلـي صـوره*");
    await Create_Url(Void, citel , 'clown'); 
})

//=============================================================================
cmd({ pattern: "greyscale", alias :["قديم","ابيض-اسود"], category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*֎╎رد عـلـي صـوره*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("*֎╎رد عـلـي صـوره*");
    await Create_Url(Void, citel , 'greyscale'); 
})
//=============================================================================
cmd({ pattern: "invert", alias :["شبح"], category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*֎╎رد عـلـي صـوره*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("*֎╎رد عـلـي صـوره*");
    await Create_Url(Void, citel , 'invert'); 
})
//=============================================================================
cmd({ pattern: "blur", alias :["بلور"], category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*֎╎رد عـلـي صـوره*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("*֎╎رد عـلـي صـوره*");
    await Create_Url(Void, citel , 'blur'); 
})
//============================================================================
cmd({ pattern: "drip", alias :["جسم","تركيب"], category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*֎╎رد عـلـي صـوره*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("*֎╎رد عـلـي صـوره*");
    await Create_Url(Void, citel , 'drip'); 
})

//=============================================================================
cmd({ pattern: "gun", alias :["مسلح"], category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*֎╎رد عـلـي صـوره*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("*֎╎رد عـلـي صـوره*");
    await Create_Url(Void, citel , 'gun'); 
})
//=============================================================================
cmd({ pattern: "wanted", alias :["مطلوب"], category: "editor", filename: __filename,  desc: "pic Editor."},
async(Void, citel, text) => {
    if (!citel.quoted) return await citel.reply(`*֎╎رد عـلـي صـوره*`);
    if(citel.quoted.mtype !='imageMessage') return await citel.reply("*֎╎رد عـلـي صـوره*");
    await Create_Url(Void, citel , 'wanted'); 
})
//=============================================================================
