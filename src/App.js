import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [제목들, 제목변경] = useState(['찬실은 복도 많지', '내 서랍 속에 행복', '컴온컴온']);
  const [like, likeAdd] = useState(0);
  const [modal, setModal] = useState(false);

  // 동적 UI를 만들기 위해서는 현재 UI 상태를 state에 저장해두어야 함
  let [title, setTitle] = useState(0); // 0이면 0번째 제목, 1이면 1번째 제목 ... 

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color : 'yellow', fontSize : '22px'}}>힐링영화</h4>
      </div>
      <button onClick={() => {
          let copy1 = [...제목들];
          copy1[0] = '벌새';
          copy1[1] = '우리들';
          copy1[2] = '가족';
          제목변경(copy1);
        }}>신규영화</button>
      <button onClick={() => {
          let copy2 = [...제목들];
          copy2.sort();
          제목변경(copy2);
        }}>제목정렬</button>
      {제목들.map((e, i) => {
        return (
          <div className='list'>
            <h4 onClick={() => {setModal(!modal); setTitle(i)}}>{제목들[i]}</h4>
              {/* {제목} <span onClick={() => {likeAdd(like + 1)}}>👍</span> {like}</h4> */}
            <p>4월 18일</p>
          </div>
        );
      })}
      { modal === true ? <Modal 제목변경={제목변경} color="skyblue" title1={제목들} title={title}/> : null }
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className='modal' style={{background: props.color}}>
      <h4>{props.title1[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {props.제목변경(['라이프잇셀프', '벌새', '라이스보이'])}}>글 수정</button>
  </div>
  );
}

export default App;