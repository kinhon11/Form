import React from 'react';
import '../styles/Registration.scss'; // Import the styles for the registration form

class Registration extends React.Component {
  state = {
    Fullname: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    gender: '',
    terms: false,
    error: {},
    submit: null
  };

  handleChangeFullname = (event) => {
    this.setState({ 
        Fullname: event.target.value });
  };

  handleChangeEmail = (event) => {
    this.setState({ 
        Email: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ 
        Password: event.target.value });
  };

  handleChangeConfirmPassword = (event) => {
    this.setState({ 
        ConfirmPassword: event.target.value });
  };

  handleChangeGender = (event) => {
    this.setState({ 
        gender: event.target.value });
  };

  handleChangeTerms = (event) => {
    this.setState({ 
        terms: event.target.checked });
  };

  validate = () => {
    const errors = {};
    const { Fullname, Email, Password, ConfirmPassword, gender, terms } = this.state;
    if (!Fullname.trim()) errors.Fullname = "Họ tên bắt buộc";
    if (!Email) {
      errors.Email = "Email bắt buộc";
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      errors.Email = "Email không hợp lệ";
    }
    if (!Password) {
      errors.Password = "Mật khẩu bắt buộc";
    } else if (Password.length < 6) {
      errors.Password = "Mật khẩu phải ít nhất 6 ký tự";
    }
    if (!ConfirmPassword) {
      errors.ConfirmPassword = "Xác nhận mật khẩu bắt buộc";
    } else if (ConfirmPassword !== Password) {
      errors.ConfirmPassword = "Mật khẩu không khớp";
    }

    if (!gender) errors.gender = "Vui lòng chọn giới tính";
    if (!terms) errors.terms = "Bạn phải đồng ý điều khoản";

    return errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();

    if (Object.keys(errors).length > 0) {
      this.setState({ error: errors, submit: null });
    } else {
      this.setState({
        error: {},
        submit: {
          Fullname: this.state.Fullname,
          Email: this.state.Email,
          Password: this.state.Password,
          gender: this.state.gender,
          terms: this.state.terms
        }
      });
    }
  };

  render() {
    const { error } = this.state;

    return (
      <div className="registration-container" style={{ maxWidth: "500px", margin: "auto" }}>
        <h2>Form Đăng Ký (Class Component)</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Họ tên:</label><br />
            <input type="text" value={this.state.Fullname}
             onChange={this.handleChangeFullname} />
            <div style={{ color: "red" }}>{error.Fullname}</div>
          </div>

          <div>
            <label>Email:</label><br />
            <input type="text" value={this.state.Email} 
            onChange={this.handleChangeEmail} />
            <div style={{ color: "red" }}>{error.Email}</div>
          </div>

          <div>
            <label>Mật khẩu:</label><br />
            <input type="password" value={this.state.Password} 
            onChange={this.handleChangePassword} />
            <div style={{ color: "red" }}>{error.Password}</div>
          </div>

          <div>
            <label>Xác nhận mật khẩu:</label><br />
            <input type="password" value={this.state.ConfirmPassword} onChange={this.handleChangeConfirmPassword} />
            <div style={{ color: "red" }}>{error.ConfirmPassword}</div>
          </div>

          <div>
            <label>Giới tính:</label><br />
            <input type="radio" name="gender" value="Nam" checked={this.state.gender === "Nam"} onChange={this.handleChangeGender} /> Nam
            <input type="radio" name="gender" value="Nữ" checked={this.state.gender === "Nữ"} onChange={this.handleChangeGender} /> Nữ
            <input type="radio" name="gender" value="Khác" checked={this.state.gender === "Khác"} onChange={this.handleChangeGender} /> Khác
            <div style={{ color: "red" }}>{error.gender}</div>
          </div>

          <div>
            <label>
              <input type="checkbox" checked={this.state.terms} onChange={this.handleChangeTerms} /> Tôi đồng ý điều khoản
            </label>
            <div style={{ color: "red" }}>{error.terms}</div>
          </div>

          <button type="submit">Đăng ký</button>
          <button> Đăng Nhập</button>
        </form>

        {this.state.submit && (
          <div style={{ marginTop: "20px" }}>
            <h3>Dữ liệu đã nhập:</h3>
            <pre>{JSON.stringify(this.state.submit, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
}

export default Registration;
