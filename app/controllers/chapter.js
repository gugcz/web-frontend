const organizerModel = require('../models/organizers');

module.exports = async function (req, res) {

  const organizers = await organizerModel.getOrganizersForChapter(req.params.chapterId)
  res.render('chapter/index', {

    title: 'GDG Brno',

    // Basic info
    date: '02.03.2017',
    time: '18:00 - 20:00',
    name: 'Čtvrtkon - Jak na sociální sítě',
    description: 'Jak na sociální sítě a Facebook? Přijďte a dozvíte se užitečné rady a tipy pro vytváření a publikování obsahu na firemním Facebooku a Instagramu a nezapomeneme nahlédnout ani pod pokličku Facebookových reklam.-- Kateřina Komorousová (ZEST&brand) -- > Jak nakrmit Facebook firemní stránku a Instagram obsahem, co její fanoušci dobře stráví? -- Lukáš Chládek (Inizio) -- > Pravdy a lži o reklamě na Facebooku Jaké jsou trendy ve Facebook reklamě, co vše je možné udělat a jak reklamy cílit, kdy FB reklamu (ne)používat - to vše proložené konkrétními zkušenostmi z praxe se dozvíte v Lukášově přednášce.',
    imgLink: "http://materializecss.com/images/sample-1.jpg",
    imgAlt: "Obrázek eventu",

    // Social links
    linkFacebook: 'https://www.facebook.com/groups/ctvrtkon/',
    linkSrazy: 'http://srazy.info/ctvrtkon/7130',
    linkCustom: 'http://ctvrtkon.cz/pozvanka-na-ctvrtkon-54-2-brezna-2017/',

    organizers: organizers,


    // Chapter info
    chapterName: 'GBG České Budějovice',
    chapterLink: 'http://www.gug.cz/cs/gbg/skupiny/ceske-budejovice'
  });
};
