# javascript 30

- 30 days javacript challenge.
- Learned from wesbos course.

### Day1. Javascript Drum Kit

- 키보드 관련 key code 알 수 있는 사이트: keycode.info
- document의 querySelector는 해당되는 첫 번째 element를 가져온다. 만약 같은 형태인데 속성이 다르다 하면 data attribute 값을 부여하고 attribute selector을 사용해 특정 element를 가져올 수 있다.
- audio element의 play 메서드는 src를 실행한다.
- css에 transition 속성을 어떤 element에 줬을 때 transitionend라는 eventlistener에 function을 걸어서 해당 transition이 끝났을 때 특정 행동을 넣을 수 있다.

### Day2. CSS + JS Clock

- css의 transform에 대해서 알아봤다.
- transform-origin 속성을 통해 transform 했을 때의 기준점을 정할 수 있다.

### Day3. CSS Variables

- data-attribute 또 나왔다. blur랑 spacing 같은 경우 suffix가 필요하기 떄문에 이 속성을 만들어서 사용한다.
- dataset은 object인데 특정 엘리먼트에서 모든 'data-' attribute를 포함하는 daaset이다. 엘리먼트의 data- 달려있는 모든 것을 포함하는 object를 반환한다.
- querySelectorAll() 메서드를 사용하면 NodeList를 반환하는데 이게 array와는 다르다. console 찍고 protoType 보면 쓸 수 있는 메서드들이 있는데 map도 없고 하는 것을 확인할 수 있다.
- css에 :root 안에 선언한 variables를 어떻게 가져다 업데이트 할까. 일단 :root는 최상위이므로 document를 가져온다. 그리고 documentElement의 style에서 setProperty를 해준다. setProperty는 첫 번째 인자로 key를, 두 번째 인자로 value를 받는다.
- 그리고 스타일 줄 때 가장 최상위는 inline 스타일이다.
- color hex code: #BADA55

### Day4. Array Cardio Day1

- array의 filter 메서드는 callback fn을 인자로 받으며 filter할 내용에 true를 반환해주면 해당 filter에 걸리는 array의 아이템들을 object에 넣어서 반환한다.
- map()은 array를 받아서 해당 array에 작업을 한 다음 그 결과의 array를 반환한다.
- sort는 callback fn을 인자로 받으며 이 fn은 두 개의 인자를 받는다. 이 두 인자로 sort를 해주면 된다. 만약 나이가 큰 사람부터 작은 사람으로 sort를 하고 싶으면 조건문에 a.age > b.age 해주면 된다.
- reduce()는 array의 모든 single item에 대해서 어떤 작업을 하고 싶을 때 사용한다. 예를 들어 모든 아이템의 값을 더해 하나의 값을 리턴하고 싶다 든가 할 때 사용한다. reduce()의 callback fn은 첫 번째 인자로 어떤 작업한 결과를 넣고 싶은 변수, 이것이 return 하는 변수에 들어간다. 그리고 두 번째 이자가 array의 single item 들이다. 이 reduce는 두 번쨰 인자로 callback fn의 첫 번째 인자의 초기값을 넣어준다. 예를 들어 어떤 작업을 한 결과를 object에 넣고 싶으면 {}를 넣어주면 된다.
- reduce를 한번도 써본 적이 없어서 제일 낯설었는데 가장 많이 사용할 것 같다.
