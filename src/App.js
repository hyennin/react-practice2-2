import { getValue } from '@testing-library/user-event/dist/utils';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [제목들, 제목변경] = useState(['찬실은 복도 많지', '내 서랍 속에 행복', '컴온컴온']);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  // 동적 UI를 만들기 위해서는 현재 UI 상태를 state에 저장해두어야 함
  const [title, setTitle] = useState(0); // 0이면 0번째 제목, 1이면 1번째 제목 ... 
  // 사용자가 입력한 내용을 저장하는 변수
  const [user, setUser] = useState('');

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
            <h4 onClick={() => {setModal(true); setTitle(i)}}>{제목들[i]}
            <span onClick={(e) => {
              // 이벤트 버블링 해결
              e.stopPropagation(); 
              let copy6 = [...like];
              copy6[i] += 1;
              setLike(copy6);
            }}>👍</span> {like[i]}</h4>
            <p>4월 18일</p>
            <button onClick={() => {
              let copy4 = [...제목들];
              copy4.splice(i, 1);
              제목변경(copy4);
            }}>삭제</button>
          </div>
        );
      })}
      {/* input 안 text 값 가져오기 */}
      {/* <input type='text' onChange={(e) => {console.log(e.target.value)}}></input> */}
      {/* 사용자가 입력한 내용을 user에 저장하기 */}
      <input type='text' onChange={(e) => {setUser(e.target.value)}}></input>
      <button onClick={() => {
        let copy3 = [...제목들];
        copy3.unshift(user);
        제목변경(copy3);
      }}>발행</button>
      { modal === true ? <Modal 제목변경={제목변경} color="skyblue" title1={제목들} index={title} setModal={setModal}/> : null }
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className='modal' style={{background: props.color}}>
      <h4>{props.title1[props.index]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {props.제목변경(['라이프잇셀프', '벌새', '라이스보이'])}}>글 수정</button>
      <button onClick={() => {props.setModal(false)}}>닫기</button>
  </div>
  );
}

export default App;