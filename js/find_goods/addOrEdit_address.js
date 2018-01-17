(function($, doc) {
    $.init();
    $.ready(function() {
        //��ַ
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

//��������޸���Ϣ
$('.save-address-btn').click(function(){
    //todo ��������޸���Ϣ
    alert('��������޸���Ϣ!');
})