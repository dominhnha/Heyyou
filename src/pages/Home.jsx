import React from 'react'
import Grid from '../components/Grid'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import Section, { SectionBody,SectionTitle } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <Helmet
      title='Trang chủ'
    >
      {/* hero slider */}
        <HeroSlider
            data={heroSliderData}
            control={true}
            auto={true}
            timeOut={5000}
        />

      {/* end hero slider */}

      {/* policy Section */}
      <Section>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap={20}
            >
              {
                policy.map((item,index)=>{
                  return(
                    <Link to="/policy">
                        <PolicyCard
                          key={index}
                          name={item.name}
                          description={item.description}
                          icon={item.icon}
                        />
                    </Link>
                    
                  )
                })
              }
            </Grid>
              
          </SectionBody>
      </Section>
      {/*end policy Section */}

      {/* best sale */}
      <Section>
          <SectionTitle>
              Top sản phẩm bán chạy
          </SectionTitle>
          <SectionBody>
            <Grid
                col={4}
                mdCol={2}
                smCol={1}
                gap={20}
              >
                {
                  productData.getAllProducts(5).map((item,index)=>{
                      return(
                        <ProductCard
                            key={index}
                            img01={item.image01}
                            img02={item.image02}
                            name={item.title}
                            price={item.price}
                            slug={item.slug}
                        />
                      )
                  })
                }
              </Grid>
          </SectionBody>
      </Section>
      {/* end best salse */}
    </Helmet>
  )
}

export default Home