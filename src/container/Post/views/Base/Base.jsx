import { Routes, Route } from 'react-router-dom'
import { detailPostPath } from '../../paths'
import { HeroSection, PostSection } from './sect/index';


const Base = () => {
  return (
    <>
      <HeroSection />
      <Routes>
        <Route path={detailPostPath} element={<PostSection />} />
      </Routes>

    </>
  );
}

export default Base;
