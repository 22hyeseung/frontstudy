DBMS

firebase에서 사용할 DB는 noSQL.  
하나의 커다란 Object이다.

```js
root = {
  message: {
    ...
  }
}
```

```js
root = {
  question: [
    {
      option1: '자장면',
      option2: '짬뽕',
      option1_image: 'https://image.jpg',
      option2_image: 'https://image2.jpg'
      posted_by: {
        name: '스무살',
        email: 'ys@gmail.com',
        photoUrl: 'http://profile.jpg'
      },
      option1_vote: {
        {
          name: '홍',
        },
        {
          name: '우'
        },
      },
      option2_vote:[
      ]
    }
  ]
}
```
