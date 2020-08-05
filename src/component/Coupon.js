import React from 'react';

import Tabs from './Tab';
import './Tabs.css';

const firstTab = [
  {
    id: 0,
    name: 'Kim',
    level: '대리',
  },
  {
    id: 1,
    name: 'Ko',
    level: '이사',
  },
];

const secondTab = [
  {
    id: 0,
    nickName: 'Kim',
    phone: '000',
    address: '성남',
  },

  {
    id: 1,
    nickName: 'Ko',
    phone: '010',
    address: '홍대',
  },
];

const thirdTab = [
  {
    id: 1,
    name: '이정도',
    username: 'jd1386',
    email: 'lee.jungdo@gmail.com',
    website: 'https://leejungdo.com',
    province: '경기도',
    city: '성남시',
    district: '분당구',
    street: '대왕판교로 160',
    zipcode: '13525',
    createdAt: '2019-02-24T16:17:47.000Z',
    updatedAt: '2019-02-24T16:17:47.000Z',
  },
  {
    id: 2,
    name: '김재완',
    username: 'lastrites2018',
    email: 'jaewan@gmail.com',
    phone: '02-879-5000',
    website: 'https://github.com/lastrites2018',
    province: '',
    city: '서울특별시',
    district: '관악구',
    street: '관악로 145',
    zipcode: '08832',
    createdAt: '2019-02-24T16:17:47.000Z',
    updatedAt: '2019-02-24T16:17:47.000Z',
  },
  {
    id: 3,
    name: '김성은',
    username: 'sunnysid3up',
    email: 'sunny@daum.net',
    phone: '010-4280-1991',
    website: 'https://github.com/sunnysid3up',
    province: '',
    city: '서울특별시',
    district: '강동구',
    street: '성내로 25',
    zipcode: '05397',
    createdAt: '2019-02-24T16:17:47.000Z',
    updatedAt: '2019-02-24T16:17:47.000Z',
  },
  {
    id: 4,
    name: '이주연',
    username: 'yyijoo',
    email: 'jooyeon@gmail.com',
    phone: '010-2940-1401',
    website: 'https://github.com/yyijoo',
    province: '경기도',
    city: '용인시',
    district: '수지구',
    street: '포은대로 435',
    zipcode: '16835',
    createdAt: '2019-02-24T16:17:47.000Z',
    updatedAt: '2019-02-24T16:17:47.000Z',
  },
  {
    id: 5,
    name: '구일모',
    username: 'johnnykoo84',
    email: 'johnny@gmail.com',
    phone: '010-8491-3982',
    website: 'https://github.com/johnnykoo84',
    province: '',
    city: '서울특별시',
    district: '강남구',
    street: '학동로 426',
    zipcode: '06090',
    createdAt: '2019-02-24T16:17:47.000Z',
    updatedAt: '2019-02-24T16:17:47.000Z',
  },
  {
    id: 6,
    name: '장원진',
    username: 'jangwj2931',
    email: 'jang@gmail.com',
    phone: '010-4811-0921',
    website: 'https://github.com/jangwj2931',
    province: '',
    city: '부산광역시',
    district: '부산진구',
    street: '시민공원로 30',
    zipcode: '47193',
    createdAt: '2019-02-24T16:17:47.000Z',
    updatedAt: '2019-02-24T16:17:47.000Z',
  },
  {
    id: 7,
    name: '최윤우',
    username: 'yoonooyoonoo',
    email: 'yoonooyoonoo@naver.com',
    phone: '010-3910-9849',
    website: 'https://blog.naver.com/yoonooyoonoo',
    province: '',
    city: '대전광역시',
    district: '유성구',
    street: '대덕대로 480',
    zipcode: '34126',
    createdAt: '2019-02-24T16:17:47.000Z',
    updatedAt: '2019-02-24T16:17:47.000Z',
  },
  {
    id: 8,
    name: '이강인',
    username: 'kanginlee',
    email: 'kanginlee@hanmail.net',
    phone: '010-9311-9411',
    website: 'https://twitter.com/@kanginlee',
    province: '전라북도',
    city: '전주시',
    district: '완산구',
    street: '풍남동3가 64-1',
    zipcode: '55041',
    createdAt: '2019-02-24T16:17:47.000Z',
    updatedAt: '2019-02-24T16:17:47.000Z',
  },
  {
    id: 9,
    name: '박동민',
    username: 'dongpark',
    email: 'dongpark@naver.com',
    phone: '010-4941-5092',
    website: 'https://dongpark.com',
    province: '전라남도',
    city: '광주광역시',
    district: '서구',
    street: '내방로 111',
    zipcode: '61945',
    createdAt: '2019-02-24T16:17:47.000Z',
    updatedAt: '2019-02-24T16:17:47.000Z',
  },
  {
    id: 10,
    name: '정지수',
    username: 'jisoocity',
    email: 'jisoocity@naver.com',
    phone: '010-8591-4011',
    website: 'https://instagram.com/jisoocity',
    province: '',
    city: '대구광역시',
    district: '중구',
    street: '공평로 88',
    zipcode: '41911',
    createdAt: '2019-02-24T16:17:47.000Z',
    updatedAt: '2019-02-24T16:17:47.000Z',
  },
];

// componentDidMount(){
//   fetch('./contacts.json')
//   .then((response)=> response.json())
//   .then((responseData)=>{
//     this.setState({contacts: responseData});
//   })
//   .catch((error)=> {
//     console.log('Error fetching and parsing data', error);
//   });
// }

// render(){
//   return (
//     <ContactsApp contacts={this.StaticRange.contacts} />
//   );
// }
// }

const tabs = [
  { name: '상품쿠폰', id: 1, value: firstTab },
  { name: '금액쿠폰', id: 2, value: secondTab },
  { name: '전체쿠폰', id: 3, value: thirdTab },
];

function Coupon() {
  return (
    <>
      <Tabs tabs={tabs} />
    </>
  );
}

export default Coupon;

/*
const buttonClick = (tabs) => {
  if (tabs.id === 1) {
    return <firstTab id={Tabs.id} name={Tabs.name} level={Tabs.level} />;
  }
  return (
    <secondTab
      id={Tabs.id}
      nickName={Tabs.nickName}
      phone={Tabs.phone}
      address={Tabs.address}
    />
  );
};
*/
