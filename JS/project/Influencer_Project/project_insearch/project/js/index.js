

$(document).ready(function() {
    
    // 카테고리 메뉴 클릭 이벤트
    $("#cateGoryMenu").click(function(){
        IpController.initList();
    });
    // 카테고리 선택 이벤트
    $("#cateGorySel").click(function(){
        IpController.initList();
    });
    // 검색 버튼 이벤트
    $("#searchBtn").click(function(){
        IpController.initList();
    });

    // 검색 엔터 이벤트
	$('#searchValue').keyup(function(event) {
	    if (event.which == 13) {
	    	IpController.initList();
	    }
    });
    
    // 정렬 대상
    $("#sort").click(function(){
        IpController.listAjax();
    });

    // 오름차순 or 내림차순
    $("#sortBy").click(function(){
        IpController.listAjax();
    });


    IpController.initList();
});  


var IpController = { 

    initList : function(){
        IpController.initList();

    }, listAjax : function() {

        var param = {

            sort: $("#sort").val(),
            sortBy: $("#sortBy").val(),
            visibleList: $("#visibleList").val(),
            searchValue: $("#searchValue").val()
        }
        
        $.ajax({ 
            type: "GET", 
            url: '${pageContext.request.contextPath}/ip/listIpAjax.do',
            dataType:"json",  
            data: param,
            success: function(result) {
                 
                console.log(result);

                /*
                 if(result.resultCd == "0000"){

                    //테이블 초기화
                    $('#ipList tbody tr').remove();
                    
                     if(result.dataList !=null && result.dataList.length > 0){

                         //전체 데이터 개수
                         var totalCnt = parseInt(result.dataCnt, 10);
                         //가져온 데이터 개수
                         var listCnt = parseInt(result.dataList.length, 10);
                         //현재 페이지
                         var currentPage = parseInt(result.param.page, 10);
                         //한번에 보여줄 row 수
                         var pageSize = parseInt(result.param.visibleList, 10);
                         
                         var num = 0;
                         for(var i=0;i<result.dataList.length;i++){
                             //번호 계산
                             num = totalCnt - pageSize * (currentPage - 1) - i;
                             //테이블에 row append
                             ComMsgController.addListRow(result.dataList[i], i, listCnt, num, false);
                         }
                         
                     }else {
                         ComMsgController.addListRow('', '', '', '', true);
                    }
                     
                     //페이징 처리
                     ComMsgController.setPager("paging", pageSize, currentPage, totalCnt, 'ComMsgController.goPage');

                 }else{
                     alert(result.resultMsg);
                 }
                */
            }
            
        }); 
    }, detailIpView : function() {

    }

}