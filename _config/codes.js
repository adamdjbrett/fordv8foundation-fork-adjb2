export default function(eleventyConfig) {

  eleventyConfig.addShortcode("imageg2", function({ src1, alt1, src2, alt2, src3, alt3 }) {
    return `
<div class="row mb-3">
  <div class="p-3 col-md-7">
    <img class="img-fluid" alt="${alt1}" width="100%" height="100%" src="${src1}"/>
  </div>
  <div class="p-3 col-md-5">
    <img class="img-fluid mb-3" alt="${alt2}" width="100%" height="100%" src="${src2}"/><br/>
    <img class="img-fluid" alt="${alt3}" width="100%" height="100%" src="${src3}"/>
  </div>
</div>
    `;
  });

  eleventyConfig.addShortcode("imageg3", function({ src1, alt1, src2, alt2}) {
    return `
<div class="row mb-3">
  <div class="p-3 col-md-8">
    <img class="img-fluid" alt="${alt1}" width="100%" height="100%" src="${src1}"/>
  </div>
  <div class="p-3 col-md-4">
    <img class="img-fluid" alt="${alt2}" width="100%" height="100%" src="${src2}"/>
  </div>
</div>
    `;
  });

  eleventyConfig.addShortcode("imagegt", function({ src1, alt1, text, src2, alt2}) {
    return `
<div class="row mb-3">
  <div class="p-3 col-md-6">
    <img class="img-fluid" alt="${alt1}" width="100%" height="100%" src="${src1}"/>
  </div>
  <div class="p-3 col-md-6">
    <p>${text}</p>
    <img class="img-fluid" alt="${alt2}" width="100%" height="100%" src="${src2}"/>
  </div>
</div>
    `;
  });


  eleventyConfig.addShortcode("imageg", function({ src1, alt1, src2, alt2}) {
    return `
<div class="row mb-3">
  <div class="p-3 col-md-6">
    <img class="img-fluid" alt="${alt1}" width="100%" height="100%" src="${src1}"/>
  </div>
  <div class="p-3 col-md-6">
    <img class="img-fluid" alt="${alt2}" width="100%" height="100%" src="${src2}"/>
  </div>
</div>
    `;
  });

  eleventyConfig.addShortcode("henrys", function({ intro,text1,image1,alt1,image2,alt2,text2,image3,alt3,text3,text4}) {
    return `
<div class="row">
  <div class="col-md-8">
  <div class="row">
  <div class="col-md-12 p-3">
    <p>${intro}</p>
  </div>
  <div class="col-md-6 p-3">
    <p>${text1}</p>
  </div>
  <div class="col-md-6 p-3">
    <img class="img-fluid" alt="${alt1}" width="100%" height="100%" src="${image1}"/>
  </div>
  <div class="col-md-12 p-3">
    <img class="img-fluid mb-3" alt="${alt2}" width="100%" height="100%" src="${image2}"/>
    <p>${text2}</p>
  </div>
  </div>
  </div>
  <div class="p-3 col-md-4">
    <img class="img-fluid mb-3" alt="${alt3}" width="100%" height="100%" src="${image3}"/>
    <p>${text3}</p>
    <p>${text4}</p>
  </div>
</div>
    `;
  });

  eleventyConfig.addShortcode("labday", function({ src1, alt1, src2, alt2, src3, alt3}) {
    return `
<div class="row mb-3">
  <div class="p-3 col-md-4">
    <img class="img-fluid" alt="${alt1}" width="100%" height="100%" src="${src1}"/>
  </div>
  <div class="p-3 col-md-4">
    <img class="img-fluid" alt="${alt2}" width="100%" height="100%" src="${src2}"/>
  </div>
  <div class="p-3 col-md-4">
    <img class="img-fluid" alt="${alt3}" width="100%" height="100%" src="${src3}"/>
  </div>
</div>
    `;
  });

  eleventyConfig.addShortcode("abouts", function({ title,src1, alt1, url1,src2, alt2,url2, src3, alt3, url3}) {
    return `
<div class="row mb-3 text-center">
  <div class="text-center p-3 col-md-12"><h3>${title}</h3></div>
  <div class="p-3 col-md-4 zoom">
    <a href="${url1}" class="non"><img class="img-fluid mb-3" alt="${alt1}" width="100%" height="100%" src="${src1}"/><p class="text-secondary">${alt1}</p></a>
  </div>
  <div class="p-3 col-md-4 zoom">
    <a href="${url2}" class="non"><img class="img-fluid mb-3" alt="${alt2}" width="100%" height="100%" src="${src2}"/><p class="text-secondary">${alt2}</p></a>
  </div>
  <div class="p-3 col-md-4 zoom">
    <a href="${url3}" class="non"><img class="img-fluid" mb-3 alt="${alt3}" width="100%" height="100%" src="${src3}"/><p class="text-secondary">${alt3}</p></a>
  </div>
</div>
    `;
  });


  eleventyConfig.addShortcode("grid4", function({ src1, alt1, src2, alt2,src3, alt3,src4, alt4}) {
    return `
<div class="row mb-3 text-center">
  <div class="p-3 col-md-3 col-6 zoom">
    <img class="img-fluid mb-3 img-ev" alt="${alt1}" width="100%" height="100%" src="${src1}"/>
  </div>
  <div class="p-3 col-md-3 col-6 zoom">
    <img class="img-fluid mb-3 img-ev" alt="${alt2}" width="100%" height="100%" src="${src2}"/>
  </div>
  <div class="p-3 col-md-3 col-6 zoom">
    <img class="img-fluid mb-3 img-ev" alt="${alt3}" width="100%" height="100%" src="${src3}"/>
  </div>
  <div class="p-3 col-md-3 col-6 zoom">
    <img class="img-fluid mb-3 img-ev" alt="${alt4}" width="100%" height="100%" src="${src4}"/>
  </div>
</div>
    `;
  });

  eleventyConfig.addShortcode("buttonfootsinggle", function({ text1,src1,alt1,btn1,url1,text2,src2,alt2,btn2,url2,text3,src3,alt3,btn3,url3}) {
    return `
<div class="row mb-3 text-center">
  <div class="p-3 col-md-6">
    <img class="img-fluid mb-3" alt="${alt1}" width="100%" height="100%" src="${src1}"/>
  </div>
  <div class="p-3 col-md-6">
    <p>${text1}</p>
    <p><a href="${url1}" class="btn btn-primary">${btn1}</a></p>
  </div>
</div>
    `;
  });

  eleventyConfig.addShortcode("buttonfoot", function({ text1,src1,alt1,btn1,url1,text2,src2,alt2,btn2,url2,text3,src3,alt3,btn3,url3}) {
    return `
<div class="row mb-3 text-center">
  <div class="p-3 col-md-6">
    <img class="img-fluid mb-3" alt="${alt1}" width="100%" height="100%" src="${src1}"/>
  </div>
  <div class="p-3 col-md-6">
    <p>${text1}</p>
    <p><a href="${url1}" class="btn btn-primary">${btn1}</a></p>
  </div>
  <div class="p-3 col-md-6">
    <img class="img-fluid mb-3" alt="${alt2}" width="100%" height="100%" src="${src2}"/>
  </div>
  <div class="p-3 col-md-6">
    <p>${text2}</p>
    <p><a href="${url2}" class="btn btn-primary">${btn2}</a></p>
  </div>
  <div class="p-3 col-md-6">
    <img class="img-fluid mb-3" alt="${alt3}" width="100%" height="100%" src="${src3}"/>
  </div>
  <div class="p-3 col-md-6">
    <p>${text3}</p>
    <p><a href="${url3}" class="btn btn-primary">${btn3}</a></p>
  </div>
</div>
    `;
  });

};
