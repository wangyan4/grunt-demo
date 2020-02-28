const expect = require('chai').expect,
      http = require('http');

describe('矩形计算器 http api 接口测试', () => {
  it('正确格式检测 ', (done) => {
    http.get('http://localhost:8080/rectamgle?width=5&height=7'),function(){
      var result='';
      res.on('data',(chunk)=>{
        result+= chunk;
      });
      res.on('end',()=>{
        var rect = JSON.parse(result);
        expect(rect.area).to.be.equal(35);
        expect(rect.perimeter).to.be.equal(24);
        done();
      })
    }
  });
  
});

