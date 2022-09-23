import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from 'src/components/BlogCard';
import BlogList from 'src/components/BlogList';
import BreadCrumb from 'src/components/BreadCrumb';
import Pagination from 'src/components/Pagination';
import DefaultLayout from 'src/layouts/DefaultLayout';

function News() {
  return (
    <div className='container pb-3'>
      <BreadCrumb from='Trang chủ' to='Tin tức' />
      <div className='row pt-3'>
        <div className='col-xl-8 col-lg-8 col-12'>
          <div className='blog-only'>
            <BlogCard />
          </div>
          <article className='row'>
            <div className='col-12 col-xs-6 col-sm-6 col-lg-6 col-xl-6'>
              <BlogCard size='sm' />
            </div>
            <div className='col-12 col-xs-6 col-sm-6 col-lg-6 col-xl-6'>
              <BlogCard size='sm' />
            </div>
          </article>
          <Pagination />
        </div>
        <div className='col-xl-4 col-lg-4 col-12'>
          <div className='stk-pro'>
            <BlogList hot title='Tin tức & sự kiện' padding={3} />
            <BlogList title='Bài viết nổi bật' padding={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;