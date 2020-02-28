var expect = chai.expect;
describe('矩形面积函数测试', () => {
  it('area(2,10) = 20 ', () => {
    var r = rectangle();
    expect(r.area(2,10)).to.be.equal(20);
  });
  it('perimeter(2,10) =  ', () => {
    var r = rectangle();
    expect(r.perimeter(2,10)).to.be.equal(20);
  });
});
