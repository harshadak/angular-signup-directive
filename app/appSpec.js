describe('optIn', function () {

    var scope,
        element,
        compiled,
        html,
        brandLogo,
        brandImg;

    beforeEach(module("myApp"));
    beforeEach(module("opt-in.html"));
    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        brandLogo = "brand-logo";
        brandImg = "<div class='" + brandLogo + "'></div>";
        html = "<opt-in>" + brandImg + "</opt-in>";
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
    }));
    it('should render element and contain the brand logo', function () {
        expect(element.html()).toContain(brandLogo);
    })
});
