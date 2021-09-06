/** global: VRS */
if(VRS && VRS.globalDispatch && VRS.serverConfig) {
	VRS.globalDispatch.hook(VRS.globalEvent.bootstrapCreated, function(bootStrap) {
		/////////////////////////
		///// JETPHOTOS.NET /////
		/////////////////////////
		VRS.LinkSite.ahJetPhotosDotNet = "jetphotosnet";
		VRS.linkRenderHandlers.push(
			new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahJetPhotosDotNet,
                displayOrder:       1,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.registration.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.registration.chg; },
                title:              'JetPhotos',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'http://www.jetphotos.net/showphotos.php?regsearch=' + ( aircraft.registration.val ? (!isNaN(aircraft.registration.val) && aircraft.operatorIcao.val ? VRS.stringUtility.htmlEscape(aircraft.formatOperatorIcao() + aircraft.formatRegistration()) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration())) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration(false)) ); },
                target:             'jetphotos'
             })
          );

          /////////////////////////////
          ///// PLANESPOTTERS.NET /////
          /////////////////////////////
          VRS.LinkSite.ahPlaneSpottersDotNet = "planespottersnet";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahPlaneSpottersDotNet,
                displayOrder:       2,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.registration.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.registration.chg; },
                title:              'Planespotters',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'https://www.planespotters.net/photos/reg/' + ( aircraft.registration.val ? (!isNaN(aircraft.registration.val) && aircraft.operatorIcao.val ? VRS.stringUtility.htmlEscape(aircraft.formatOperatorIcao() + aircraft.formatRegistration()) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration())) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration(false)) ); },
                target:             'planespotters'
             })
          );

          /////////////////////////////
          /////// ONESPOTTER.COM //////
          /////////////////////////////
          VRS.LinkSite.ahOneSpotterDotCom = "onespottercom";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahOneSpotterDotCom,
                displayOrder:       3,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.icao.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.icao.chg; },
                title:              'OneSpotter',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'http://onespotter.com/aircrafts/search?text=' + ( aircraft.icao.val ); },
                target:             'onespotter'
             })
          );

	  /////////////////////////////
          /////// ADSBEXCHANGE //////
          /////////////////////////////
          VRS.LinkSite.ahADSBExchangeDotCom = "adsbexchangecom";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahADSBExchangeDotCom,
                displayOrder:       4,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.icao.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.icao.chg; },
                title:              'ADS-B Exchange',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'https://globe.adsbexchange.com/?icao=' + ( aircraft.icao.val ) + "&sort1=date&sortAsc1=0&sort2=none&notOnline=0"; },
                target:             'adsbexchange'
             })
          );

	  /////////////////////////////
          /////// TRAFEGOAEREO //////
          /////////////////////////////
          VRS.LinkSite.ahTrafegoAereoDotCom = "trafegoaereocom";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahTrafegoAereoDotCom,
                displayOrder:       5,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.icao.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.icao.chg; },
                title:              'TrafegoAereo',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'https://tar1090.trafegoaereo.com.br/tar1090/?icao=' + ( aircraft.icao.val ) + "&sort1=date&sortAsc1=0&sort2=none&notOnline=0"; },
                target:             'trafegoaereo'
             })
          );

          ///////////////////////////
          ///// FLIGHTAWARE.COM /////
          ///////////////////////////
          VRS.LinkSite.ahFlightAwareDotCom = "flightawarecom";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahFlightAwareDotCom,
                displayOrder:       6,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.registration.val || aircraft.callsign.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.registration.chg || aircraft.callsign.chg; },
                title:              'FlightAware',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'http://flightaware.com/live/flight/' + ( aircraft.callsign.val ? (!isNaN(aircraft.callsign.val) && aircraft.operatorIcao.val ? VRS.stringUtility.htmlEscape(aircraft.formatOperatorIcao() + aircraft.formatCallsign()) : VRS.stringUtility.htmlEscape(aircraft.formatCallsign())) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration(true)) ); },
                target:             'flightaware'
             })
          );

          //////////////////////////
          //// REGISTRY.FAA.GOV ////
          //////////////////////////
          VRS.LinkSite.ahSerialRegistryDotFaaDotOrg = "serialfaaorg";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahSerialRegistryDotFaaDotOrg,
                displayOrder:       7,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.serial.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.serial.chg; },
                title:              'Serial (FAA)',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'https://registry.faa.gov/aircraftinquiry/Search/SerialNumberInquiry?serial=' + ( aircraft.serial.val ) + '&sort_option=1&PageNo=1'; },
                target:             'serialfaa'
             })
          );

          //////////////////////////
          //// REGISTRY.FAA.GOV ////
          //////////////////////////
          VRS.LinkSite.ahNNumberRegistryDotFaaDotOrg = "nnumberfaaorg";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahNNumberRegistryDotFaaDotOrg,
                displayOrder:       8,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.registration.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.registration.chg; },
                title:              'N Number (FAA)',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'https://registry.faa.gov/aircraftinquiry/Search/NNumberResult?NNumberTxt=' + ( aircraft.registration.val ); },
                target:             'nnumberfaa'
             })
          );

          ///////////////////////////
          ///// ANAC.GOV.BR/RAB /////
          ///////////////////////////
          VRS.LinkSite.RAB_info = "anac";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.RAB_info,
                displayOrder:       9,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.registration.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.registration.chg; },
                title:              'RAB (ANAC)',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'https://sistemas.anac.gov.br/aeronaves/cons_rab_resposta_en.asp?textMarca=' + ( aircraft.registration.val ? (!isNaN(aircraft.registration.val) && aircraft.operatorIcao.val ? VRS.stringUtility.htmlEscape(aircraft.formatOperatorIcao() + aircraft.formatRegistration()) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration(true))) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration(true)) ); },
                target:             'RAB'
             })
          );

          ///////////////////////////
          /* JAKAFOTOGRAFIA.COM.BR */
          ///////////////////////////
          VRS.LinkSite.ahJakaFotografia = "jakafotografia.com.br";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahJakaFotografia,
                displayOrder:       10,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.registration.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.registration.chg; },
                title:              'JakaFotografia',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'http://www.jakafotografia.com.br/busca.php?chave=' + ( aircraft.registration.val ? (!isNaN(aircraft.registration.val) && aircraft.operatorIcao.val ? VRS.stringUtility.htmlEscape(aircraft.formatOperatorIcao() + aircraft.formatRegistration()) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration())) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration(false)) ) + '&tabela=1'; },
                target:             'jakafotografia'
             })
          );

          ///////////////////////////////
          /* GALERIA.PILOTODEAVIAO.COM */
          ///////////////////////////////
          VRS.LinkSite.ahPilotoDeAviaoDotCom = "galeria.pilotodeaviao.com";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahPilotoDeAviaoDotCom,
                displayOrder:       11,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.registration.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.registration.chg; },
                title:              'PilotoDeAvião',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'http://galeria.pilotodeaviao.com/index.php/search?q=' + ( aircraft.registration.val ? (!isNaN(aircraft.registration.val) && aircraft.operatorIcao.val ? VRS.stringUtility.htmlEscape(aircraft.formatOperatorIcao() + aircraft.formatRegistration()) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration())) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration(false)) ); },
                target:             'pilotodeaviao'
             })
          );

          ////////////////////////////
          //////// FLICKR.COM ////////
          ////////////////////////////
          VRS.LinkSite.ahFlickrDotCom = "flickr.com";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahFlickrDotCom,
                displayOrder:       12,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.registration.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.registration.chg; },
                title:              'Flickr',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'https://www.flickr.com/search/?text=' + ( aircraft.registration.val ? (!isNaN(aircraft.registration.val) && aircraft.operatorIcao.val ? VRS.stringUtility.htmlEscape(aircraft.formatOperatorIcao() + aircraft.formatRegistration()) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration())) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration(false)) ); },
                target:             'flickr'
             })
          );

          /////////////////////////////
          /////// GOOGLE IMAGES ///////
          /////////////////////////////
          VRS.LinkSite.ahGoogleImages = "images.google.com";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahGoogleImages,
                displayOrder:       13,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.registration.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.registration.chg; },
                title:              'Google',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'https://www.google.com.br/search?safe=off&tbm=isch&source=hp&biw=1680&bih=987&q="' + ( aircraft.registration.val ? (!isNaN(aircraft.registration.val) && aircraft.operatorIcao.val ? VRS.stringUtility.htmlEscape(aircraft.formatOperatorIcao() + aircraft.formatRegistration()) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration())) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration(false)) ) + '"'; },
                target:             'googleimages'
             })
          );

          ///////////////////////////////
          ////// AIRTEAMIMAGES.COM //////
          ///////////////////////////////
          VRS.LinkSite.ahAirTeamImagesDotCom = "airteamimages.com";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahAirTeamImagesDotCom,
                displayOrder:       14,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.registration.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.registration.chg; },
                title:              'AirTeamImages',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'http://www.airteamimages.com/search.php?srch_keyword=' + ( aircraft.registration.val ? (!isNaN(aircraft.registration.val) && aircraft.operatorIcao.val ? VRS.stringUtility.htmlEscape(aircraft.formatOperatorIcao() + aircraft.formatRegistration()) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration())) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration(false)) ) + '&header-search-button=search'; },
                target:             'airteamimages'
             })
          );

          ////////////////////////
          /////// LKPD.INFO //////
          ////////////////////////
          VRS.LinkSite.ahLKPDDotInfo = "lkpdinfo";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahLKPDDotInfo,
                displayOrder:       15,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.registration.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.registration.chg; },
                title:              'LKPDinfo',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'http://www.lkpd.info/search.php?registration=' + ( aircraft.registration.val ? (!isNaN(aircraft.registration.val) && aircraft.operatorIcao.val ? VRS.stringUtility.htmlEscape(aircraft.formatOperatorIcao() + aircraft.formatRegistration()) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration())) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration(false)) ); },
                target:             'lkpdinfo'
             })
          );

          //////////////////////////
          /// AVIATIONCORNER.NET ///
          //////////////////////////
          VRS.LinkSite.ahAviationCornerDotNet = "aviationcornernet";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahAviationCornerDotNet,
                displayOrder:       16,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.registration.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.registration.chg; },
                title:              'AviationCorner',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'http://www.aviationcorner.net/gallery_en.asp?registration=' + ( aircraft.registration.val ? (!isNaN(aircraft.registration.val) && aircraft.operatorIcao.val ? VRS.stringUtility.htmlEscape(aircraft.formatOperatorIcao() + aircraft.formatRegistration()) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration())) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration(false)) ); },
                target:             'aviationcorner'
             })
          );

          ////////////////////////////
          /// PLANESPOTTERSHUB.COM ///
          ////////////////////////////
          VRS.LinkSite.ahPlaneSpottersHubDotCom = "planespottershubcom";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahPlaneSpottersHubDotCom,
                displayOrder:       17,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.registration.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.registration.chg; },
                title:              'PlaneSpotersHub',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'http://www.planespottershub.com/registration/' + ( aircraft.registration.val ? (!isNaN(aircraft.registration.val) && aircraft.operatorIcao.val ? VRS.stringUtility.htmlEscape(aircraft.formatOperatorIcao() + aircraft.formatRegistration()) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration())) : VRS.stringUtility.htmlEscape(aircraft.formatRegistration(false)) ); },
                target:             'planespottershub'
             })
          );         

          //////////////////////////
          ///// EUROCONTROL.IT /////
          //////////////////////////
          VRS.LinkSite.ahEuroControl = "contentzone.eurocontrol.int/";
          VRS.linkRenderHandlers.push(
             new VRS.LinkRenderHandler({
                linkSite:           VRS.LinkSite.ahEuroControl,
                displayOrder:       18,
                canLinkAircraft:    function(/** VRS.Aircraft */ aircraft) { return aircraft && (aircraft.modelIcao.val); },
                hasChanged:         function(/** VRS.Aircraft */ aircraft) { return aircraft.modelIcao.chg; },
                title:              'Eurocontrol',
                buildUrl:           function(/** VRS.Aircraft */ aircraft) { return 'https://contentzone.eurocontrol.int/aircraftperformance/details.aspx?ICAO=' + ( aircraft.modelIcao.val  ); },
                target:             'Eurocontrol'
             })
          );
	});
}
