// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Component/Header';
import ImageSlider from './Component/ImageSlider';
import Offer from './Component/Offer';
import MainContent from './Component/MainContent';
import ShowMenuItem from './Component/ShowMenuItem';
import data from './data/data.json'
import Menu from './Component/Menu';
import ProductReview from './Component/ProductReview';
import Videos from './Component/Videos';
import InThePress from './Component/InThePress';
import Footer from './Component/Footer';
// import Navbar from './Component/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <ImageSlider></ImageSlider>
    <Offer data={data}></Offer>

    {/* <Text text="viku baiya"></Text> */}
    <MainContent></MainContent>
    <Menu></Menu>
    <Routes>
      <Route path="/MI_CLONE" element={<ShowMenuItem cover={data.hotAccessoriesCover.music} item={data.hotAccessories.music}></ShowMenuItem>}></Route>
      <Route path="/smart" element={<ShowMenuItem cover={data.hotAccessoriesCover.smartDevice} item={data.hotAccessories.smartDevice}></ShowMenuItem>}></Route>
      <Route path="/home" element={<ShowMenuItem cover={data.hotAccessoriesCover.home} item={data.hotAccessories.home}></ShowMenuItem>}></Route>
      <Route path="/life" element={<ShowMenuItem cover={data.hotAccessoriesCover.lifeStyle} item={data.hotAccessories.lifeStyle}></ShowMenuItem>}></Route>
      <Route path="/mobile" element={<ShowMenuItem cover={data.hotAccessoriesCover.mobileAccessories} item={data.hotAccessories.mobileAccessories}></ShowMenuItem>}></Route>
    </Routes>
    <ProductReview productreviewe={data.productReviews}></ProductReview>
    <Videos video={data.videos}></Videos>
    <InThePress data={data}></InThePress>
    <Footer footer={data.footer}></Footer>
    {/* <Navbar></Navbar> */}
    </BrowserRouter>
  );
}

export default App;
