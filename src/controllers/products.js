import Product from "../models/product.js";


const getAllProduct = async (req, res) => {
  const products = await Product.find({});
  return res.status(200).send({products});
};

const getAllTestingProduct = async (req, res) => {
    const products = await Product.find({company:'samsung'});
  return res.status(200).send(products)
};

const searchProduct = async (req, res) => {
  const {company, name ,sort , select , page , limit} = req.query;
  const query = {}
   if(company) {
    query.company = company;
   }
   if(name){
    query.name = {$regex: name, $options: 'i'}; 
   }
   let resultQuery =  Product.find(query);
   if(sort){
     const finalSort = sort.split(',').join(' ');
     resultQuery = resultQuery.sort(finalSort);
   }
   if(select){
      const finalSelect = select.split(',').join(' ');
      resultQuery = resultQuery.select(finalSelect);
   }
    const pageNumber = Number(page) || 1;
    console.log("🚀 ~ searchProduct ~ pageNumber:", pageNumber)
    const limitNumber = Number(limit) || 5;
    console.log("🚀 ~ searchProduct ~ limitNumber:", limitNumber)
    const skip = (pageNumber - 1) * limitNumber;
    resultQuery = resultQuery.skip(skip).limit(limitNumber);
  const result = await resultQuery;
  const totalDocs = await Product.countDocuments(query);
  const totalPages = Math.ceil(totalDocs / limitNumber);

return res.status(200).json({
  page: pageNumber,
  limit: limitNumber,
  totalPages,
  totalDocs,
  count: result.length,
  data: result.length > 0 ? result : [],
});
}
export { getAllProduct, getAllTestingProduct , searchProduct };
