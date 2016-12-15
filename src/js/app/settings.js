define([], function () {
    return {
        fromWs: false,
        isAuto: true,
        hasPreload: true,
        isNewPreloader: true,
        isChief: false,
        isShowCurrentLeader: true,
        server: 'birzhaserv',
        username: 'DataExchange',
        password: '123456',
        preloadTimes: 23,
        timeout: {
            actions: 4500,
            superAction: 4500,
            preloadActions: 2500,
            preloadSuperAction: 2500,
            showDiscountCoinAfterFilling: 1500,
            pauseBeforeShowReal: 6000,
            speedDropping: 70,
            changeLayers: 20000,
            showCurrrentLeaderLayer: 5000,
            gettingCurrentLeader: 60000
        },
        steps:{
            step: 0,
            maxStep: 40,
            startStep: 0
        },

        url: {
            getCurrentActions: 'http://' + this.username + ':' + this.password + '@' + this.server+ '/menu/hs/display/get-current-actions',
            getSuperAction: 'http://' + this.username + ':' + this.password + '@' + this.server+ '/menu/hs/display/get-super-action'
        }
    };
});