import AuthModalContext from "./AuthModalContext";
import UserContext from "./UserContext";
import Routing from "./Routing";
import PostFormModalContext from "./PostFormModalContext";
import RedirectContext from "./RedirectContext";

function App() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
  }, []);
  function logout() {
      .then(() => setUser({}));
  }

  return (
    <AuthModalContext.Provider
      value={{ show: showAuthModal, setShow: setShowAuthModal }}
    >
      <PostFormModalContext.Provider
        value={{ show: showPostFormModal, setShow: setShowPostFormModal }}
      >
        <UserContext.Provider value={{ ...user, logout, setUser }}>
          <RedirectContext.Provider value={{ redirect, setRedirect }}>
            <Routing />
          </RedirectContext.Provider>
        </UserContext.Provider>
      </PostFormModalContext.Provider>
    </AuthModalContext.Provider>
  );
}

export default App;
