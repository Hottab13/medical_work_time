import { Link, Navigate, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";

import { useLoginDoctorsMutation } from "../redux/authApi";
import { Loader } from "../components/Loader";
import { setAuth } from "../redux/slices/authSlice";

const Container = tw.div`
container 
flex 
flex-col 
h-screen 
bg-gray-100
`;
const AuthCard = tw.div`
w-11/12 
p-12 
sm:w-8/12 
md:w-6/12 
lg:w-5/12 
2xl:w-4/12 
px-6 py-10 sm:px-10 sm:py-6 
bg-white 
rounded-lg 
shadow-md 
lg:shadow-lg
`;
const CardTitle = tw.h2`
text-center 
font-semibold 
text-3xl 
lg:text-4xl 
text-gray-800
`;
const AuthCardContainer = tw.div`
grid 
place-items-center 
mx-2 
my-20 
sm:my-auto
`;
const CardTitlePage = tw.span`
flex 
text-center 
font-bold 
my-20 
mx-auto 
text-gray-800 
text-3xl
`;
const Input = tw.input`
block 
w-full 
py-3 px-1 
mt-2 
text-gray-800 
appearance-none 
border-b-2 
border-gray-100
focus:text-gray-500 
focus:outline-none 
focus:border-gray-200
`;
const Label = tw.label`
block text-xs font-semibold text-gray-600 uppercase
`;
const Btn = tw.button`
w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none
`;
const Form = tw.form`
mt-10
`;
const ErrorsSpan = ({ errors }) =>
  errors && (
    <span className="ml-3 text-sm font-bold text-red-400 tracking-wide">
      {errors?.message || "Ошибка!"}
    </span>
  );

const jwtDecode = (token) => jwt_decode(token);

const Loginpage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const dispatch = useDispatch();
  const [loginDoctors, { isLoading, data: loginData, isSuccess }] =
    useLoginDoctorsMutation();
  if (isLoading) return <Loader />;

  const handleLogin = async (data) => {
    await loginDoctors(data).unwrap();
    reset();
  };

  if (isSuccess && loginData) {
    dispatch(setAuth(jwtDecode(loginData.token)));
    const isAdmin = (data) => {
      return data.role.find((el) => el.id === 1);
    };
    const fromPage = isAdmin(jwtDecode(loginData.token)) ? "/admin" : "/doctor";
    return <Navigate to={fromPage} replace />;
  }
  return (
    <Container>
      <AuthCardContainer>
        <CardTitlePage>Система учета времени врачей</CardTitlePage>
        <AuthCard>
          <CardTitle>Авторизация</CardTitle>
          <Form
            onSubmit={handleSubmit(handleLogin)}
            //autoComplete="off"
          >
            <div className="relative">
              <Label>Email</Label>
              <Input
                {...register("email", {
                  required: "Обязательное поле!",
                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов!",
                  },
                  maxLength: {
                    value: 100,
                    message: "Максимум 100 символов!",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Некоректный email",
                  },
                })}
                placeholder="Ваш логин"
              />
              <ErrorsSpan errors={errors?.email} />
            </div>
            <div className="content-center relative">
              <Label>Пароль</Label>
              <Input
                {...register("password", {
                  required: "Обязательное поле!",
                  minLength: {
                    value: 4,
                    message: "Минимум 4 символов!",
                  },
                  maxLength: {
                    value: 100,
                    message: "Максимум 100 символов!",
                  },
                })}
                type="password"
                placeholder="Введите ваш пароль"
              />
              <ErrorsSpan errors={errors?.password} />
            </div>
            <Btn type="submit">Войти</Btn>
            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              <Link to="" className="flex-2 underline">
                Забыли пароль?
              </Link>
            </div>
          </Form>
        </AuthCard>
      </AuthCardContainer>
    </Container>
  );
};
export { Loginpage };
