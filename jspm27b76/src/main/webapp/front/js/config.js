
var projectName = '网上拍卖系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.jsp'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.jsp'
}
]


var indexNav = [

{
	name: '拍卖商品',
	url: './pages/paimaishangpin/list.jsp'
}, 

{
	name: '系统公告',
	url: './pages/news/list.jsp'
},
{
	name: '留言交流',
	url: './pages/messages/list.jsp'
}
]

var adminurl =  "http://localhost:8080/jspm27b76/index.jsp";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["新增","查看","修改","删除"],"menu":"卖家","menuJump":"列表","tableName":"maijia"}],"menu":"卖家管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["新增","查看","修改","删除"],"menu":"商品类型","menuJump":"列表","tableName":"shangpinleixing"}],"menu":"商品类型管理"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","修改","删除"],"menu":"拍卖商品","menuJump":"列表","tableName":"paimaishangpin"}],"menu":"拍卖商品管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改","删除"],"menu":"用户竞拍","menuJump":"列表","tableName":"yonghujingpai"}],"menu":"用户竞拍管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改","删除"],"menu":"成交通知","menuJump":"列表","tableName":"chengjiaotongzhi"}],"menu":"成交通知管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改","删除","报表"],"menu":"用户评价","menuJump":"列表","tableName":"yonghupingjia"}],"menu":"用户评价管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"留言交流","tableName":"messages"}],"menu":"留言交流"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"系统公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","竞拍"],"menu":"拍卖商品列表","menuJump":"列表","tableName":"paimaishangpin"}],"menu":"拍卖商品模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","删除"],"menu":"用户竞拍","menuJump":"列表","tableName":"yonghujingpai"}],"menu":"用户竞拍管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","支付","评价"],"menu":"成交通知","menuJump":"列表","tableName":"chengjiaotongzhi"}],"menu":"成交通知管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改","删除"],"menu":"用户评价","menuJump":"列表","tableName":"yonghupingjia"}],"menu":"用户评价管理"},{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","竞拍"],"menu":"拍卖商品列表","menuJump":"列表","tableName":"paimaishangpin"}],"menu":"拍卖商品模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["新增","查看","修改","删除","查看评论"],"menu":"拍卖商品","menuJump":"列表","tableName":"paimaishangpin"}],"menu":"拍卖商品管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","通知"],"menu":"用户竞拍","menuJump":"列表","tableName":"yonghujingpai"}],"menu":"用户竞拍管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看","修改","删除"],"menu":"成交通知","menuJump":"列表","tableName":"chengjiaotongzhi"}],"menu":"成交通知管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","审核"],"menu":"用户评价","menuJump":"列表","tableName":"yonghupingjia"}],"menu":"用户评价管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","竞拍"],"menu":"拍卖商品列表","menuJump":"列表","tableName":"paimaishangpin"}],"menu":"拍卖商品模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"卖家","tableName":"maijia"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
