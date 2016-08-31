describe('DataFactory', function() {
  var dataFactory;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function(_dataFactory_) {
    dataFactory = _dataFactory_;
  }));

  it('should exist', function() {
    expect(dataFactory).toBeDefined();
  });

  describe('Get User Function', function(){
    it('should exist', function() {
      expect(dataFactory.getUser).toBeDefined();
    });

    it('should return a promise', function(){
      expect(dataFactory.getUser().then).toBeDefined()
    });
  })

  describe('Get Repos Function', function(){
    it('should exist', function() {
      expect(dataFactory.getRepos).toBeDefined();
    });

    it('should return a promise', function(){
      expect(dataFactory.getRepos().then).toBeDefined()
    });
  })
});
