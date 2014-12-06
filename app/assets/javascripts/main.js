(function($, window, document, undefined) {

    var _cfg = {
        docBody: $('body')
    };


    var _bankAccount = {

        init: function() {

            _bankAccount.handleViews();
        },

        handleViews: function() {

            $('.changeView').on('click', function() {
                var showView = $(this).data('view');

                $('.setView').each(function() {
                    $(this).addClass('hide');
                });
                $('.' + showView).removeClass('hide');

                console.log("Show view: " + showView)
                return false;
            });
        }

    };


    $(function(){
        _bankAccount.init();
    });


})(jQuery, window, document);