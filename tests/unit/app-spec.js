define(["app-fixture", "app"],
function(AppFixture,    App) {
  describe("App", function() {
    it("Should return hello", function() {
      expect(App.hello()).toEqual(AppFixture.hello);
    });
  });
});
