(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    return d(b);
    function d(k, l) {
        switch (k) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['startsWith']('photo'))
                        s = this['getByClassName']('PhotoPlayList');
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        } else
            e['call'](this);
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"layout":"absolute","scrollBarMargin":2,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_9BB3CF5F_89D4_B748_41C7_C01844034535_playlist])","data":{"textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"pitch":1},"history":{},"locales":{"pt":"locale/pt.txt"},"name":"Player4895","defaultLocale":"pt"},"watermark":false,"defaultMenu":["fullscreen","mute","rotation"],"class":"Player","children":["this.MainViewer","this.Container_9BB3EF61_89D4_B778_4184_D3FB67B04E82"],"minHeight":0,"hash": "0bdf5ccf189fcf070906be8829febc7878676b330b98debdc029399ab0477075", "definitions": [{"layout":"horizontal","scrollBarMargin":2,"right":0,"data":{"name":"Container4897"},"class":"Container","minHeight":0,"minWidth":0,"gap":10,"bottom":0,"scrollBarColor":"#000000","backgroundOpacity":0,"propagateClick":false,"children":["this.ThumbnailList_9BB3CF5F_89D4_B748_41C7_C01844034535"],"height":200,"verticalAlign":"bottom","horizontalAlign":"center","left":0,"id":"Container_9BB3EF61_89D4_B778_4184_D3FB67B04E82"},{"id":"panorama_99E08CE7_89D4_7947_41D0_53266B56FADB","label":trans('panorama_99E08CE7_89D4_7947_41D0_53266B56FADB.label'),"data":{"label":"IMG_20230220_142623_272"},"overlays":["this.overlay_9B6DF507_89D4_88C7_413E_4A56F700B0E8"],"vfov":180,"hfov":360,"adjacentPanoramas":[{"select":"this.overlay_9B6DF507_89D4_88C7_413E_4A56F700B0E8.get('areas').forEach(function(a){ a.trigger('click') })","yaw":159.02,"backwardYaw":-4.82,"panorama":"this.panorama_9866D780_89D7_97B9_41DD_00C5D62BF450","distance":64.94,"data":{"overlayID":"overlay_9B6DF507_89D4_88C7_413E_4A56F700B0E8"},"class":"AdjacentPanorama"}],"hfovMin":"135%","thumbnailUrl":"media/panorama_99E08CE7_89D4_7947_41D0_53266B56FADB_t.jpg","hfovMax":130,"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_99E08CE7_89D4_7947_41D0_53266B56FADB_t.jpg","cube":{"class":"ImageResource","levels":[{"width":12288,"rowCount":4,"url":"media/panorama_99E08CE7_89D4_7947_41D0_53266B56FADB_0/{face}/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":24},{"width":6144,"rowCount":2,"url":"media/panorama_99E08CE7_89D4_7947_41D0_53266B56FADB_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_99E08CE7_89D4_7947_41D0_53266B56FADB_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6},{"width":9216,"rowCount":1,"url":"media/panorama_99E08CE7_89D4_7947_41D0_53266B56FADB_0/{face}/vr/0.jpg","height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_99E08CE7_89D4_7947_41D0_53266B56FADB_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","colCount":6}]},"class":"CubicPanoramaFrame"}]},{"id":"panorama_9866D780_89D7_97B9_41DD_00C5D62BF450","label":trans('panorama_9866D780_89D7_97B9_41DD_00C5D62BF450.label'),"data":{"label":"IMG_20230220_143051_876"},"overlays":["this.overlay_9B7EA4EC_89D4_8949_41C2_6CF014314187"],"vfov":180,"hfov":360,"adjacentPanoramas":[{"select":"this.overlay_9B7EA4EC_89D4_8949_41C2_6CF014314187.get('areas').forEach(function(a){ a.trigger('click') })","yaw":-4.82,"backwardYaw":159.02,"panorama":"this.panorama_99E08CE7_89D4_7947_41D0_53266B56FADB","distance":99.15,"data":{"overlayID":"overlay_9B7EA4EC_89D4_8949_41C2_6CF014314187"},"class":"AdjacentPanorama"}],"hfovMin":"135%","thumbnailUrl":"media/panorama_9866D780_89D7_97B9_41DD_00C5D62BF450_t.jpg","hfovMax":130,"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_9866D780_89D7_97B9_41DD_00C5D62BF450_t.jpg","cube":{"class":"ImageResource","levels":[{"width":12288,"rowCount":4,"url":"media/panorama_9866D780_89D7_97B9_41DD_00C5D62BF450_0/{face}/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":24},{"width":6144,"rowCount":2,"url":"media/panorama_9866D780_89D7_97B9_41DD_00C5D62BF450_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"width":3072,"rowCount":1,"url":"media/panorama_9866D780_89D7_97B9_41DD_00C5D62BF450_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6},{"width":9216,"rowCount":1,"url":"media/panorama_9866D780_89D7_97B9_41DD_00C5D62BF450_0/{face}/vr/0.jpg","height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","colCount":6},{"width":12288,"rowCount":1,"url":"media/panorama_9866D780_89D7_97B9_41DD_00C5D62BF450_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","colCount":6}]},"class":"CubicPanoramaFrame"}]},{"initialSequence":"this.sequence_99EC6497_89D4_89C6_41BA_ADFCEA13ED1D","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"enterPointingToHorizon":true,"id":"panorama_9866D780_89D7_97B9_41DD_00C5D62BF450_camera","class":"PanoramaCamera"},{"id":"ThumbnailList_9BB3CF5F_89D4_B748_41C7_C01844034535_playlist","items":[{"camera":"this.panorama_9866D780_89D7_97B9_41DD_00C5D62BF450_camera","media":"this.panorama_9866D780_89D7_97B9_41DD_00C5D62BF450","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_99E08CE7_89D4_7947_41D0_53266B56FADB_camera","media":"this.panorama_99E08CE7_89D4_7947_41D0_53266B56FADB","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"playbackBarProgressBackgroundColor":["#3399FF"],"id":"MainViewer","progressBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"progressBarBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarHeadShadowOpacity":0.7,"progressBarBorderRadius":2,"subtitlesFontFamily":"Arial","progressBottom":10,"progressOpacity":0.7,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"progressBorderColor":"#000000","toolTipPaddingBottom":4,"progressBarBackgroundColor":["#3399FF"],"playbackBarBottom":5,"subtitlesTextShadowOpacity":1,"playbackBarLeft":0,"progressBarBackgroundColorRatios":[0],"vrPointerColor":"#FFFFFF","progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","progressLeft":"33%","subtitlesFontColor":"#FFFFFF","playbackBarHeadHeight":15,"toolTipFontFamily":"Arial","vrPointerSelectionColor":"#FF6600","toolTipPaddingRight":6,"toolTipBorderColor":"#767676","width":"100%","progressBackgroundColor":["#000000"],"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBackgroundColor":["#FFFFFF"],"toolTipTextShadowColor":"#000000","subtitlesBottom":50,"playbackBarHeight":10,"height":"100%","subtitlesTextShadowVerticalLength":1,"playbackBarHeadBorderSize":0,"surfaceReticleColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","toolTipShadowColor":"#333138","vrPointerSelectionTime":2000,"firstTransitionDuration":0,"class":"ViewerArea","progressBackgroundColorRatios":[0],"minHeight":50,"toolTipBackgroundColor":"#F6F6F6","minWidth":100,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadow":true,"toolTipFontSize":"1.11vmin","playbackBarBorderRadius":0,"playbackBarHeadWidth":6,"progressBarBorderSize":0,"subtitlesTop":0,"playbackBarProgressBorderSize":0,"playbackBarProgressBorderColor":"#000000","toolTipPaddingLeft":6,"playbackBarBackgroundColorDirection":"vertical","toolTipFontColor":"#606060","progressBorderRadius":2,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","progressHeight":2,"toolTipPaddingTop":4,"playbackBarRight":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderColor":"#000000","propagateClick":false,"playbackBarHeadBorderRadius":0,"subtitlesBorderColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarBorderSize":0,"playbackBarProgressBorderRadius":0},{"initialSequence":"this.sequence_99D0049B_89D4_89CF_41C0_0B3BE0B4CD40","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"enterPointingToHorizon":true,"id":"panorama_99E08CE7_89D4_7947_41D0_53266B56FADB_camera","class":"PanoramaCamera"},{"id":"mainPlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_9866D780_89D7_97B9_41DD_00C5D62BF450_camera","media":"this.panorama_9866D780_89D7_97B9_41DD_00C5D62BF450","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_99E08CE7_89D4_7947_41D0_53266B56FADB_camera","media":"this.panorama_99E08CE7_89D4_7947_41D0_53266B56FADB","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}],"class":"PlayList"},{"layout":"horizontal","scrollBarMargin":2,"itemThumbnailShadow":true,"itemBorderRadius":0,"itemLabelFontWeight":"normal","itemPaddingRight":3,"maxHeight":600,"data":{"name":"ThumbnailList4898"},"itemPaddingTop":3,"id":"ThumbnailList_9BB3CF5F_89D4_B748_41C7_C01844034535","maxWidth":800,"playList":"this.ThumbnailList_9BB3CF5F_89D4_B748_41C7_C01844034535_playlist","class":"ThumbnailList","itemThumbnailShadowOpacity":0.8,"minHeight":0,"itemPaddingLeft":3,"backgroundColor":["#000000"],"minWidth":0,"gap":10,"itemBackgroundColorRatios":[],"borderRadius":5,"itemThumbnailHeight":75,"backgroundColorRatios":[0],"itemLabelFontColor":"#FFFFFF","itemLabelGap":5,"scrollBarColor":"#FFFFFF","backgroundOpacity":0.2,"selectedItemLabelFontWeight":"bold","itemThumbnailShadowBlurRadius":4,"itemThumbnailShadowColor":"#000000","itemThumbnailOpacity":1,"itemLabelTextDecoration":"none","paddingTop":10,"paddingBottom":10,"itemLabelFontStyle":"normal","itemPaddingBottom":3,"itemBackgroundColor":[],"itemThumbnailBorderRadius":5,"itemLabelFontSize":14,"itemBackgroundOpacity":0,"itemThumbnailWidth":100,"itemLabelFontFamily":"Arial","itemThumbnailScaleMode":"fit_outside","paddingLeft":20,"itemBackgroundColorDirection":"vertical","itemThumbnailShadowSpread":1,"paddingRight":20,"propagateClick":false},{"mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","mode":"quality","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate","aaEnabled":true,"class":"PanoramaPlayer"},{"id":"overlay_9B6DF507_89D4_88C7_413E_4A56F700B0E8","maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_9A859996_89DD_9BD9_41D4_8F2DFADF2A67"],"data":{"hasPanoramaAction":true,"label":"GoToImg_20230220_143051_876"},"items":[{"data":{"label":"GoToImg_20230220_143051_876"},"distance":100,"pitch":-1.49,"image":"this.AnimatedImageResource_9A9B26A8_89DD_89C9_41E0_B7D13435D9FB","yaw":159.02,"vfov":10.5,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"useHandCursor":true,"class":"HotspotPanoramaOverlay"},{"id":"overlay_9B7EA4EC_89D4_8949_41C2_6CF014314187","maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_9B00A5B2_89D4_8BD9_41CE_4B24746F2AAF"],"data":{"hasPanoramaAction":true,"label":"GoToImg_20230220_142623_272"},"items":[{"data":{"label":"GoToImg_20230220_142623_272"},"distance":100,"pitch":-0.97,"image":"this.AnimatedImageResource_9A98E6A7_89DD_89C7_41A8_AF192723DCE8","yaw":-4.82,"vfov":10.5,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"useHandCursor":true,"class":"HotspotPanoramaOverlay"},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_99EC6497_89D4_89C6_41BA_ADFCEA13ED1D","class":"PanoramaCameraSequence"},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_99D0049B_89D4_89CF_41C0_0B3BE0B4CD40","class":"PanoramaCameraSequence"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9A859996_89DD_9BD9_41D4_8F2DFADF2A67","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_9A9B26A8_89DD_89C9_41E0_B7D13435D9FB","rowCount":5,"finalFrame":"first","frameCount":20,"frameDuration":41,"levels":[{"width":1000,"url":"media/res_9D27A44E_89DC_8948_41AC_81A2B66AEB2B_0.png","height":1250,"class":"ImageResourceLevel"}],"class":"AnimatedImageResource","colCount":4},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9B00A5B2_89D4_8BD9_41CE_4B24746F2AAF","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_9A98E6A7_89DD_89C7_41A8_AF192723DCE8","rowCount":5,"finalFrame":"first","frameCount":20,"frameDuration":41,"levels":[{"width":1000,"url":"media/res_9D27A44E_89DC_8948_41AC_81A2B66AEB2B_0.png","height":1250,"class":"ImageResourceLevel"}],"class":"AnimatedImageResource","colCount":4}],"backgroundColor":["#FFFFFF"],"minWidth":0,"gap":10,"backgroundColorRatios":[0],"scrollBarColor":"#000000","propagateClick":false,"scripts":{"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setValue":TDV.Tour.Script.setValue,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"registerKey":TDV.Tour.Script.registerKey,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"executeJS":TDV.Tour.Script.executeJS,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"unregisterKey":TDV.Tour.Script.unregisterKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setMapLocation":TDV.Tour.Script.setMapLocation,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizShowScore":TDV.Tour.Script.quizShowScore,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"downloadFile":TDV.Tour.Script.downloadFile,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"init":TDV.Tour.Script.init,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"shareSocial":TDV.Tour.Script.shareSocial,"existsKey":TDV.Tour.Script.existsKey,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"initQuiz":TDV.Tour.Script.initQuiz,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlays":TDV.Tour.Script.getOverlays,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizFinish":TDV.Tour.Script.quizFinish,"setLocale":TDV.Tour.Script.setLocale,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playAudioList":TDV.Tour.Script.playAudioList,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizStart":TDV.Tour.Script.quizStart,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"createTween":TDV.Tour.Script.createTween,"translate":TDV.Tour.Script.translate,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"mixObject":TDV.Tour.Script.mixObject,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"resumePlayers":TDV.Tour.Script.resumePlayers,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getComponentByName":TDV.Tour.Script.getComponentByName,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showWindow":TDV.Tour.Script.showWindow,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"clone":TDV.Tour.Script.clone,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMainViewer":TDV.Tour.Script.getMainViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getKey":TDV.Tour.Script.getKey,"historyGoForward":TDV.Tour.Script.historyGoForward,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"openLink":TDV.Tour.Script.openLink,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPixels":TDV.Tour.Script.getPixels,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags},"height":"100%","width":"100%","id":"rootPlayer"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.18.js.map
})();
//Generated with v2022.2.18, Sat Feb 25 2023