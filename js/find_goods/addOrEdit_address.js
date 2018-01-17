(function($, doc) {
    $.init();
    $.ready(function() {
        //地址
        var cityPicker3 = new $.PopPicker({
            layer: 3
        });
        cityPicker3.setData(cityData);

        document.getElementById('userArea').addEventListener('tap', function(event) {
            document.activeElement.blur();
            cityPicker3.show(function(items) {
                if(!(items[2] || {}).text){
                    var cityDom = (items[0] || {}).text + " " + (items[1] || {}).text;
                } else {
                    var cityDom = (items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text;
                }
                var hcity = (items[0] || {}).text+"";
                if(hcity != null && hcity != ""){
                    doc.getElementById('getGoodsUserOfProvince').innerHTML=hcity;
                }

                var hproper = (items[1] || {}).text+"";
                if(hproper != null && hproper != ""){
                    doc.getElementById('getGoodsUserOfCity').innerHTML=hproper;
                }

                var harea = (items[2] || {}).text+"";
                if(harea != null && harea != ""){
                    if(harea=='undefined'){
                        doc.getElementById('getGoodsUserOfAreas').innerHTML='';
                    } else {
                        doc.getElementById('getGoodsUserOfAreas').innerHTML=harea;
                    }
                }
            });
        }, false);
    });
})(mui, document);

//保存或者修改信息
$('.save-address-btn').click(function(){
    //todo 保存或者修改信息
    alert('保存或者修改信息!');
})