function CreateBookmarkLink(url, title) {
    if (window.sidebar && window.sidebar.addPanel) {   // FF ver 23 ����.
        window.sidebar.addPanel(title, url, '');
    } else {
        if (window.external && ('AddFavorite' in window.external)) {    // IE
            window.external.AddFavorite(url, title);
        } else {    // Others
            alert('Ȯ���� Ŭ���Ͻ� �� �ּ�â���� <Ctrl+D>�� �����ø� ���ã�⿡ ��ϵ˴ϴ�.');
        }
    }
}

function viewXsheild() {
    window.open("/html/xsheild.html","xsheild","height=460,width=400,scrollbars=no");
}

function viewsafeshop() {
    window.open("/html/safeshop.html","safe","height=215,width=350,scrollbars=no");
}

