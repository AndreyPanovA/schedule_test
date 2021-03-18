


// Colors
export const GREY1= "#333"
export const GREY2= "#4F4F4F"
export const GREY3= "#949AA5"
export const GREY4= "#D3D9E3"
export const GREY5= "#f2f2f2"
export const ELECTRIC_BLUE="#198FE4"
export const BTN_PLUS_BLUE="#409EFF"
export const LIME="#43CC82"
export const RED= "#C21D1D" 
export const WHITE= "white"
export const BLANK ="transparent"
export const SYSTEM_LABEL_GREY ="rgba(60, 60, 67, 0.3)"
// export const format =new Intl.NumberFormat("ru-RU").format
export const CUSTOM = {
    H1TextSlider: {
        fontSize: 32,
        lineHeight:42,
        fontFamily: "medium",
        color: GREY1,
        textAlign:"center", 
        height:100, 
        // letterSpacing:1.5
    },
    H2TextStatiustics: {
        fontSize:17,
        lineHeight:26,
        fontFamily: "sfRegular", 
        color: GREY1,
        letterSpacing:0.5,
    },
    H1Text: {
        fontSize:26,
        lineHeight:30,
        fontFamily: "medium",
        color: GREY3, 
        // letterSpacing:-3
    },
    H2Text: {
        fontSize:16,
        lineHeight:20,
        fontFamily: "medium", 
        color: GREY3
    },
    H3Text: {
        fontSize:12, 
        lineHeight:16.2,
        fontFamily: "bold", 
        letterSpacing:0.65,
        color: GREY3
    },
    H4Text: {
        fontSize:11, 
        lineHeight:13.5,
        fontFamily: "medium", 
        letterSpacing:0.5,
        color: GREY3
    },
    BtnText: {
        fontSize:18, 
        lineHeight:24,
        fontFamily: "bold", 
        letterSpacing:1.38,
        color: WHITE
    },
    H1Pro: {
        fontSize:22, 
        lineHeight:30,
        fontFamily: "sfMedium",
        color: GREY3,
        // letterSpacing:-0.45,
    },
    H2Pro: {
        fontSize:17, 
        lineHeight:22,
        fontFamily: "sfRegular", 
        color: GREY1,
        // letterSpacing:0.7,
        // letterSpacing:-0.41,
        // 0.5
    },
    H3Pro: {
        fontSize:14, 
        lineHeight:20,
        fontFamily: "sfRegular", 
        letterSpacing:0.56,
        color: GREY3
    },
    H4Pro: {
        fontSize:12, 
        lineHeight:14.32,
        fontFamily: "sfMedium", 
        color: GREY3,
        // letterSpacing:0.45,
    },
    center: {
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center", 
        textAlign:"center"
    }, 
    centerM: {
        marginLeft:"auto",
        marginRight:"auto"
    },
    centerRow: {
        flexDirection:'row',
        alignItems:"center", 
        justifyContent:"center"
    },
    centerRowWrap: {
        flexDirection:'row',
        alignItems:"center", 
        justifyContent:"center", 
        flexWrap:"wrap"
    },
    betweenRow: {
        flexDirection:'row',
        alignItems:"center", 
        justifyContent:"space-between", 
    }, 
    img: {
        width:"100%", 
    },
    imgBack: {
        resizeMode: "cover",
    },
    headerText: {
     position:"absolute",
     top:30
    },
    textCenter: {
        textAlign:"center"
    },
    shad: {
        shadowColor: '#000',
        shadowOffset: { width: 0.1, height: 0.1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    inputShad: {
        shadowColor: '#000',
        shadowOffset: { width: 0.1, height: 0.1 },
        shadowOpacity: 0.2,
        shadowRadius: 0.5,
        elevation: 5,
    },
    btnTest: {
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor:GREY1,
        borderRadius:10
    }
}

export default {
    CUSTOM,
    GREY1,
    GREY2,
    GREY3,
    GREY4,
    BLANK,
    ELECTRIC_BLUE,
    BTN_PLUS_BLUE,
    SYSTEM_LABEL_GREY,
    LIME,
    RED,
    WHITE,

}

