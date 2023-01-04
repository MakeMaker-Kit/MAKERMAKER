import React from "react";
import cx from "classnames";
import { flexLayout, themes } from "../../../../styles/themes/theme";
import { BrandData } from "../../../../utils/homeData";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuery } from "../../../../services/redux/features/sanitytoclient/SanityToClient";
import { homeBrand } from "../../../../services/redux/features/sanitytoclientmain/SanityToClientSliceMain";
import { homebrandsQuery } from "../../../../utils/querypaths";
import { THomeBrand } from "../../../../types/global.types";
const Brand = () => {
  const {} = flexLayout;
  const { themeWrapper, boxFull, containerWrapper } = themes;
  const { marX, padY, largeMarX } = themeWrapper;
  const { flexRow, flexRowCenter } = flexLayout;
  const homebrand = useSelector(homeBrand);
  const dispatch = useDispatch();
  React.useEffect(() => {
    // @ts-ignore
    dispatch(fetchQuery(homebrandsQuery));
  }, [dispatch, homebrand]);
  return (
    <>
      <div className={cx(`mx-64 mt-10`)}>
        <ul className={cx(`${flexRowCenter}`, `${boxFull} flex-wrap`)}>
          {homebrand &&
            homebrand.map((brand: THomeBrand) => (
              <li
                className={cx(`w-[29.66%] md:w-three lg:w-two flex-[0_0_20%]`)}
                key={brand._id}
              >
                <div
                  className={cx(
                    `max-w-[170px] rounded text-center px-2 pt-0 sepia-[.25] saturate-50 invert-0 hover:saturate-150 hover:sepia-0 hover:invert transition-[filter_1000ms_ease-in-out]`
                    // `image_view`
                  )}
                >
                  <span className={cx(``)}>
                    <img
                      loading="lazy"
                      width={400}
                      height={400}
                      // src="https://i1.wp.com/thescienceset.com/wp-content/uploads/2018/10/au.jpg?resize=400%2C400&amp;ssl=1"
                      src={brand.brandImage}
                      alt="African Union"
                      title="African Union"
                      className={cx(
                        `max-w-full w-auto h-auto relative object-center`
                      )}
                      data-lazy-loaded="1"
                      sizes="(max-width: 400px) 100vw, 400px"
                    />
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Brand;
// import React from 'react';
// import * as Yup from 'yup';
// import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

// // Shape of form values
// interface FormValues {
//   email: string;
//   password: string;
// }

// interface OtherProps {
//   message: string;
// }

// // Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
// const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
//   const { touched, errors, isSubmitting, message } = props;
//   return (
//     <Form>
//       <h1>{message}</h1>
//       <Field type="email" name="email" />
//       {touched.email && errors.email && <div>{errors.email}</div>}

//       <Field type="password" name="password" />
//       {touched.password && errors.password && <div>{errors.password}</div>}

//       <button type="submit" disabled={isSubmitting}>
//         Submit
//       </button>
//     </Form>
//   );
// };

// // The type of props MyForm receives
// interface MyFormProps {
//   initialEmail?: string;
//   message: string; // if this passed all the way through you might do this or make a union type
// }

// // Wrap our form with the withFormik HoC
// const MyForm = withFormik<MyFormProps, FormValues>({
//   // Transform outer props into form values
//   mapPropsToValues: props => {
//     return {
//       email: props.initialEmail || '',
//       password: '',
//     };
//   },

//   // Add a custom validation function (this can be async too!)
//   validate: (values: FormValues) => {
//     let errors: FormikErrors<FormValues> = {};
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!isValidEmail(values.email)) {
//       errors.email = 'Invalid email address';
//     }
//     return errors;
//   },

//   handleSubmit: values => {
//     // do submitting things
//   },
// })(InnerForm);

// // Use <MyForm /> wherevs
// const Basic = () => (
//   <div>
//     <h1>My App</h1>
//     <p>This can be anywhere in your application</p>
//     <MyForm message="Sign up" />
//   </div>
// );

// export default Basic;
