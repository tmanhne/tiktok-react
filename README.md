# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


- Two-way Binding: 
Array:
    const courses = [
  {
    id: 1,
    name: "Html, css",
  },
  {
    id: 2,
    name: "JS",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];
-----------------------
App()
 {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handerSubmit(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handerLog}>Register</button>
----------------
const [checked, setCourse] = useState([]);
  const handerLog = () => {
    console.log({ids:checked})
  }
  const handerSubmit = (id) => {
    //Call API
    setCourse(prev => {
      const isCheck = checked.includes(id)
      if(isCheck){
        return checked.filter(item => item !== id)
      }else{
        return[...prev,id]
      }
    });
  };

*************************************
Todo List:

     const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    return storageJobs;
  });
  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jSonJob = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jSonJob)
      return newJobs;
    });
    setJob("");
  };
  return (
    <div className="App" style={{ padding: 100 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );

  /**********************************/
    useEffect:
  1. useEffect(callback)
    - gọi callback mỗi khi component 
    - re-render(gọi callBack sau khi component thêm element vào DOM)
    - 
  2. useEffect(callback, [])
    - Chỉ gọi callBacck 1 lần sau khi component mounted(component đưa vào sdung)- > gọi API 1 lần
  3. useEffect(callback, [deps])
    - CallBack sẽ được gọi lại khi component mounted, ===
    - deps: Là 1 biến truyền vào

  *> Listen DOM-event:
    - Scroll
    - Resize
    
// Callback luôn được gọi sau khi component mounted 