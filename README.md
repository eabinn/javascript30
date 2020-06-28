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

### Day5. Flex Panels Image Gallery

- box-sizing: border-box 는 테두리를 기준으로 크기를 정한다는 말이다.
- flex 속성은 flex container의 item 들에게 주며 flex: 1은 container의 모든 item들이 같은 크기의 넓이를 가진다는 말이다.
- flex: 5 같이 flex 속성에 1이 아닌 값을 준 것은 flex: 1이 모든 flex item 들이 같은 크기의 영역을 차지하는 것에 반해 flex: 5는 현재 점유의 5배 크기를 가지겠다는 말이다.
- transitionend 이벤트에서 e.propertyName을 콘솔 찍어보면 어떤 transition이 있는지 알려준다.
- flex의 경우 e.propertyName 출력해보면 safari에서는 그냥 flex 인데 다른 익스플로러에서는 flex-grow다.
- flex: 1 0 auto는 차례대로 flex-grow, flex-shrink, flex-basis다.
- addEventListener에서 transitionend로 정말 이쁜 effect를 줄 수 있다. transitionend 사용하는게 event.propertyName을 콘솔 찍어서 보면 좀 더 쉽게 작업을 할 수 있을거다.

### Day6. Ajax Type Ahead

- fetch는 promise를 return 한다.
- ... => ES6에 새로 나온 문법 중 하나인 spread다. 복사한다.
- regex는 RegExp 생성자로 만들며 첫 번쨰 인자는 string, 두 번째 인자는 플래그로 플래그 중 g는 whole string, i는 lower, upper 다 찾겠다는 말이다.
- array에, 예를 들어 datas 라는 array가 있다고 하자. 그러면 data.join('') 하게 되면 multiple array item들을 string으로 바꿔준다.
- array의 map은 모든 아이템을 돌면서 어떤 작업을 한 뒤 그 결과의 배열을 리턴한다.
- array의 filter은 해당 조건에 맞는 아이템들의 리스트를 리턴한다.

### Day7. Array Cardio Day2

- Array.prototype.some()은 at least 아이템들이 callBack fn에 해당하는지에 대한 boolean 값을 return 한다.
- Array.prototype.every()는 array의 모든 single item들이 만족하냐 안 하냐에 대한 boolean 값을 return 한다.
- Array에서 index를 가지고 해당 아이템을 Array에서 지울 때는 splice 함수를 사용할 수도 있다.
- 또한 지울 때 redux에서 상태 관리를 하기 위해 자주 사용하는 방법인데 새 array를 만드는데 지우는 index 앞뒤로 복사해서 새 array를 만든 후 return 하는 방법이 있다.

### Day8. Fun with HTML5 Canvas

- 결국은 pixel에 그리는 것이고 그러기 위해서 context라는 것을 사용한다. 일단 context 지금은 2d를 사용하는데 3d도 사용할 수 있다.
- 따라서 getContext 매서드에 2d를 넣어 context를 가져오자.
- context의 lineJoin 과 lineCap 속성은 라인이 끝나거나 서로 만날 때 그 shape을 어떻게 할 것인가에 대한 속성을 정한다.
- isDrawing은 그리냐 안 그리냐를 정하는 flag 인데 클릭한 상태에서만 그리기 위해서다.
- 그리는 것은 모두 context로 한다. 일단 beginPath()로 그린다는 것을 선언하고 moveTo()로 시작점을, 그리고 lineTo()로 종료점을 명시한다. 그리고 마지막으로 그리는 것은 stroke()로 한다.
- destructuring array라는 es6의 문법을 사용해서 코드를 간결하게 할 수 있다.
- ttps://mothereffinghsl.com/
- hsl이 뭐냐면 프로그램적으로 레인보우의 부분을 정할 수 있는 것이다. h는 red to red의 레인보우의 부분이고 s는 saturation은 brightness이고 l은 lighteness을 말한다.
- Canvas의 context의 globalCompositeOperation 값은 어떻게 blend 할 지를 정한다. multiply가 있고, ... (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

# Day9. 14 Must Know Dev Tools Tricks

- 자바스크립트로 엘리먼트의 속성을 조작할때가 있을 것이다. 근데 어떻게 되는지 잘 모르겠다. 그러면 일단 inspect에서 element를 선택하고 break on에서 attribute modification을 누르면 breakpoint가 정해진다. 그리고 페이지로 가서 해당 element를 누르면 debug 모드로 확인을 할 수 있게 된다.
- console 메세지에 스타일을 주고 싶다면 메시지 앞에 %c를 적고 두 번째 파라미터로 스타일 스트링을 주면 된다.
- console 찍을 것들을 grouping 하거나 뭔가 block이 필요한 것들은 같은 문자열 값을 주는 것으로 그룹을 정하게 된다.

# Day10. Hold Shift and Check Checkboxes

- 이건 좀 많이 이해가 안 됐는데 여러번 보니깐 이해가 됐다.
- 약간 this를 이전까지는 잘 몰랐는데 잘 알게 된 것 같다.
- array의 forEach 메서드를 쓸 때 this는 loop에서의 현재 item을 말한다.

# Day11. Custom Video Player

- querySelect 할 때 attribute로도 할 수 있다. 대신 []로 감싼다.
- data attribute 또 썼다.
- this를 어떻게 사용하냐가 중요하고 또한 attribute 들을 어떻게 가져와서 쓰느냐가 실력의 판걸음인것 같다.
- video 엘리먼트에는 timeupdate라는 이벤트가 있다.
- offsetX, offsetY는 그 엘리먼트에서의 커서의 위치를 말한다.
- offsetWidth는 그 엘리먼트의 전체 가로의 길이를 말한다.

# Day12. Key Sequence Detection (KONAMI CODE)

- 이 12일의 work는 좀 ... 이상하네. 약간 쉬어가는 느낌으로 하는건가?
- 그래도 여기서 배운 건 cornify. 귀엽다.

# Day13. Slide In on Scroll

- 스크롤 한 길이를 알수 있는 것은 window.scrollY다.
- offsetTop은 해당 엘리먼트가 window의 top에서 얼만큼 떨어졌는지를 말한다.

# Day14. Object and Arrays - Reference VS Copy

- 만약 players라는 배열이 있다. 그리고 이 players 라는 배열을 team이라는 새로운 변수에 넣는다(const team = players). 그리고 만약 team에서의 어느 한 아이템의 값을 바꾼다. 그러면 players에는 값의 변화가 있을까 없을까? 원본인 players에서도 변화가 있다. const team = players에서 의미하는 것은 team은 original array인 players의 reference다. 그래서 team에서 바꾸면 players에서의 값도 변한다.
- 그럼 reference가 아닌 단순히 배열의 copy본을 만들고 싶으면 어떻게 해야할까? 여러 개의 방법이 있는데 먼저 slice를 사용해보자. 원래 slice경우 짜르는 용도로 사용했는데 slice 자체가 array를 slice 해서 새로운 array를 return하기 떄문에 이 slice를 사용해서 기존 배열의 copy본을 만들 수 있다.
- 다른 방법은 [].concat()을 사용하는 것이다. concat은 인자로 들어오는 배열을 복사해준다.
- 세번째 방법은 ES6에 나온 spread 문법(...)을 사용하는 것이다. 이 spread는 [] 이 안의 배열의 모든 아이템을 iterate 하면서 이 배열을 감싸고 있는 containng, 여기서는 [] 안에 넣어준다.
- 네번째 방법은 Array.from()을 사용하는 것이다.
- 객체도 마찬가지다. 만약 새 변수를 만들고 거따가 그냥 original object를 넣어주면 reference를 넣어준 것이기 때문에 그 후 새 변수의 값을 수정하면 original object에 영향을 끼치게 된다.
- 그럼 어떻게 하면 될까?
- Object.assign()을 사용해보자. assign의 첫 번쨰 인자로는 빈 object, 두 번째 인자로 카피할 object를 넣어준다. 그럼 빈 object에 person이 copy 되고 세 번째 인자로 전달해주는 값들로 update된 새 객체가 리턴된다.
- 다른 방법은 es6의 spread를 사용하는 것이다. 이것도 target을 복사해서 containing 하는 것에 복사해주는 것이다. 여기서 containing은 {}다. 근데 주의할 것은 es6의 spread는 shallow, 즉 얕다 는 것이다.
- React를 공부하면서 Redux 같이 진행할때 spread 문법을 많이 사용했는데 이때 공부하면서 계속 들었던게 이 spread는 1 level만 복사하기 떄문에 2 level, 3 level도 다 들어가서 spread를 해줘야 된다고 배웠었다.
- 그 때는 level을 들어가면서 복사를 해야한다고 해서 들어가지 않으면 복사가 안되는 줄 알았는데 그게 아니었다.
- 얕다는 것은 그 단계까지는 완전히 새로운 배열로 복사한다는 것인데 그 아래는 그대로 reference를 참조한다는 뜻이었다. 따라서 완전히 복사하기 위해 그 아래 레벌로 들어가는다는 것은 reference를 참조하지 않기 위한 새 배열을 만들기 위함이다.
- 홀리... 이 14일이 스크롤 다음으로 가장 도움이 되는 교육이었다. 약간 확실한 생각으로 가지고 있었던 것이 옳지 않다는 것을 알게 된 수업이었다.

# Day15. LocalStorage and Event Delegation

- form에서 submit 이벤트를 발생시킨다. 근데 이 이벤트가 발생하면 page reloading을 한다. 근데 그걸 원치 않는다면 e.preventDefault()를 해주면 된다.
- this를 잘 쓰면 진짜 좋다. 그냥 이제 왠만해선 this를 쓰는 습관을 가지자.
- 그리고 querySelector 할 때 tagname, id, class 뿐만 아니라 attribute로 접근해보는 것도 항상 행각하자.
- key가 value를 담고있는 변수의 name이 값으면 ES6 문법으로 하나만 써도 된다.
- 그리고 form에서 submit 하고나서 나는 주로 value 값을 '' 해서 reset 시켜줬는데 그냥 form에 있는 reset() 사용하면 된다.
- label의 for attribute는 연결할 input의 id와 똑같아야 한다.
- localStorage는 key, value 저장소인데 string만 받아들인다. 그래서 만약 그냥 object를 넣는다면 Object라는 string으로 저장해준다. 그래서 localStorage에 값이 저장할 때는 string으로 바꿔서 넣어줘야 한다.
- Event Delegation 이라는 것을 왜 사용해야 하냐. 일단 웹에서 뭔가 리스트에서 새로운 아이템을 추가한다고 했을 때 그 각 아이템에 어떤 이벤트를 넣는다고 해보자. 근데 페이지가 로딩될 때 기존에 있던 리스트의 아이템들에 addEventListerer을 해서 이벤트를 준다고 하자. 근데 그러면 뒤에 생긴 아이템들은 페이지 로딩 후에 생긴 아이템들이기 때문에 이벤트가 달리지 않는다. 그래서 여기서 Event Delegation을 해주는 것이다.
- 믿을만한 parent element에 이벤트를 준다. 그럼 그 parent의 하위 element에 준 event가 delegation 된다. 이렇게 event delegation을 씀으로써 후에 생긴 하위 element에도 event를 줄 수 있다.
- 이때 주의해야 할 것은 어떤 element가 그 event를 실행해야 하는지 그게 개발할 때 정해줄텐데 모든 하위 element가 이벤트를 받음으로써 한번 꼭 필요한 element를 선택하는 필터를 걸어줘야 한다.
- 또 data attribute 나왔다. element 만들 때 data- 로 attribute 만들면 element의 dataset 객체에 - 다음의 name으로 key value가 생성된다. 그걸 유용하게 사용하기만 하면 된다.
- jquery의 is 메서드와 vanillajs의 matches 메서드는 같다.

# Day16. CSS Text Shadow Mouse Move Effect -

- offsetWidth와 offsetHeight로 해당 element의 가로 길이와 세로 길이를 알 수 있다.
- offsetX와 offsetY는 해당 이벤트에서의 커서의 위치를 말한다.
- wow... es6's destructuring is really awesome...
- 현재 hero에 mousemove event를 줬는데 hero는 children을 가지고 있다. 따라서 offsetX와 offsetY는 현재 event가 발생하고 있는 위치의 offset을 반환하는데 children element 안에서 발생하면 해당 element 기준에서의 offset을 반환한다.
- 그러므로 event를 줄 때는 children에게 delegation이 될 것을 생각하면서 trigger function에 어떤 element에서 이 event가 실행되기를 원하는지 filter를 해줘야 한다.
- 아... 근데 여기서 this의 중요성이 또 나오네. element에 event를 add 할 때 function에 전달받는 this는 이 element 뿐이다. 이 element의 children은 this의 대상이 될 수 없다. 이걸로 filter를 쉽게 걸 수 있따.
- offsetX, offsetY 뿐만 아니라 offsetTop, offsetLeft 등도 있다.
- 재밌었다. textShadow comma로 여러 개 줄 수 있다는 것도 알게 됐다.

# Day17. Sort Without Articles

- array의 sorted 메서드는 두 인자를 받으며 이 두 인자로 비교해주고 싶은 것의 if문에 return True를, 그렇지 않은 것에는 return False를 해주면 된다. 만약 오름차순으로 하고 싶으면 a > b ? 1: -1 하면 된다.
- regex에 익숙해져야 한다. ^은 가장 앞을 의미한다.
- innerHTML에 string이 아닌 것들을 넣으면, 예를 들어 array, default로 toString()을 해주기 때문에 만약 array를 넣는다면 넣기 전에 join('') 해서 아이템들을 모두 하나의 string으로 만들어주자.

# Day18. Tally String Times with Reduce

- querySelectorAll 하게되면 NodeList type으로 반환한다. 이는 Array가 아니다. 따라서 proto를 보면 알겠지만 map이 없다. 따라서 map을 쓰고 싶으면 Array로 변환해줘야 하는데 ... 를 사용해서 [] 와 같이 빈 배열에 넣거나 아니면 Array.from()을 사용한다.
- split을 한 후 이것을 배열에 destructuring(es6 문법) 하여 저장한다고 해보자. 그럼 무조건 string으로 반환하기 때문에 만약 숫자를 계산해야 하면 숫자로 바꿔줘야 한다.
- map(str => parseFloat(str))도 간단하게 쓴건데 더 간단하게 쓰고 싶다 싶으면 map(parseFloat) 그냥 하면 된다.
- reduce는 두 개의 인자를 받는다. 첫 번째가 어떤 작업을 마친 후 리턴되는 것이고 두 번째가 array의 각 아이템이다.
- mod는 나머지를 반환한다. 초에서 시간을 의미하는 3600을 mod하면 나머지가 남은 초다. / 로, 나누기로 해서 나온 값에 3600을 곱해서 다시 전체 초에서 빼도 되는데 그냥 mod 하면 된다. 항상 너무 일차원적으로 생각하는 것이 나의 문제다.

# Day19. Webcam Fun

- window.navigator은 Navigator object의 reference를 반환한다. 이 reference는 application에 대한 method와 property들을 가지고 있다.
- video element의 src에 navigator.mediaDivices.getUserMedia에서 받아온 mediaStream object를 넣어주자.
- video의 videoWidth 와 videoHeight은 webcam에서 들어오는 video의 사이즈다. 이 크기를 canvas의 width와 height에 동일하게 만들자.
- video의 play 메서드를 실행하면 'canplay' event를 emit 한다.
- canvas element의 toDataURL 메서드로 현재 canvas에 그려져있는 데이터를 가져올 수 있다.
- link element의 download attribute로 해당 link 클릭시 download 할 수 있다.
- pixel 정보를 가져와서 data를 보면 엄청나게 긴 배열이 들어있는데 이게 pixel의 정보다. r, g, b, a 순서로 반복되며 마지막 a, alpha는 transparent를 의미한다.
- 오늘차는 어려운게 아니었다. 다만 진짜 처음 해보는 것이었다. 이런 건 자주 사용해서 익숙해지는 수 밖에 없다. element에 어떤 method가 있고 어떤 property가 있는지, 또 navigator 같은 것들의 활용은 찾아봐야 알 수 있다. 재미있으니깐 가끔씩 심심할때 해보자.
- browser-sync로 localhost에 서버를 실행할 수 있다. hot reloading을 해준다.
- 나중에 놀 때 canvas의 context의 globalAlpha property도 한번 다뤄보자.

# Day20. Native Speech Recognition

- speechRecognition은 window안에 있는 global variable이다.
- SpeeechRecognition의 interimResults 를 true로 set 해줘서 잠시 멈춰도 안 끝난다.
- Let's have some rest. Too tired.

# Day21. Geolocation based Speedometer and Compass

- chrome에서 navigator로는 heading(north를 향하는) 이랑 speed를 없을 순 없다. 대신 safari로 테스트 하면 된다.
- navigator 객체는 현재 사용하고 있는 웹브라우저에 대한 정보를 제공해주는 객체다. 브라우저의 종류에 따라 자바스크립트에서 다르게 사용하는 부분들을 보완하기 위해 주로 웹브라우저 종류나 버전을 파악하는데 사용한다.

# Day22. Follow Along Link Highlighter

- html element에는 getBoundingClientRect 라는 메서드가 있는데 이 메서드로 현재 element의 offset과 해당 element의 width, height 같은 정보를 얻을 수 있다.
- 위치를 이동시킬 때 position을 absolute로 하고 top, bottom, left, right 값을 줄 수도 있지만 translate를 사용해서 이동시킬 수도 있다.
- 또한 getBoundingClientRect를 사용해서 element의 offset을 가져올 때는 현재 스크롤 위치에 따른 값이다. 그래서 scroll 할 때마다 scrollY 또는 scrollX 값을 더해줘야 현재 scroll된 위치에서의 올바른 offset을 얻을 수 있다.

# Day23. Speech Synthesis

- https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
- js에는 speechSynthesis라는 global variable이 있고 utternance와 함께 사용한다. 하지만 speak를 하기 위해서는 voice가 필요하다.
- js가 실행되면 speechSynthesis에 등록한 voicechanged라는 event가 fire되고 일단 이것의 getVoices라는 메서드를 실행해서 어떤 voice가 있는지 보자.
- addEventListener 할 때 callback function에 function의 reference를 넘기지 않고 parameter를 넣어서 주면, 예를 들어 현재 toggle이라는 함수가 있는데 toggle 이렇게 넘기지 않고 toggle(false) 와 같이 값을 값이 주면서 event를 등록하면 page를 load 하면서 실행한다.
- 방법이 여럿 있는데 일단 bind 하는 방법이 있다. bind해서 context와 parameter를 넘겨준다.
- 또는 es6에 나온 arrow function을 사용하자.
