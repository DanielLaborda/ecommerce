import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import Details from '../details';

import { FormInput, FormButton } from '../formFields';

import history from '../../history';

class SignUpForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const links = [
      {
        index: 0,
        title: 'Not registered? Create account here',
        onClick: () => history.push('/signup')
      },
      {
        index: 1,
        title: 'Forgot account email?',
        onClick: () => console.log('forgot email')
      },
      {
        index: 2,
        title: 'Forgot password?',
        onClick: () => console.log('forgot password')
      }
    ];
    return (
        <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
            <Field className='sign-up-name'
            type='name'
            title='Name'
            placeholder='Name'
            name='name'
            component={FormInput}/>
            <Field className='sign-up-form__email'
            type='email'
            title='Email'
            placeholder='Email'
            name='email'
            component={FormInput}/>
    
            <Field className='sign-up-form__password'
            type='password'
            title='Password'
            placeholder='Password'
            name='password'
            component={FormInput}/>
            <Field className='sign-up-form__confirm-password'
            type='password'
            title='Confirm Password'
            placeholder='Confirm Password'
            name='confirm'
            component={FormInput}/>
            
            <div className='sign-up-form__line'></div>
            <Field className='sign-up-form__login'
            type='submit'
            title='Login'
            name='login'
            component={FormButton}/>
            <Field className='sign-up-form__back'
            onClick={() => console.log('tryna go back')}
            type='button'
            title='Back'
            name='back'
            short={true}
            component={FormButton}/>

            <Details className='sign-up-form__details' title='QuickLinks' links={links} />
        </form>
    );
  }
}

SignUpForm = reduxForm({
  form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;