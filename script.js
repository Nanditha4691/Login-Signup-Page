function navigateTo(page) {
    // Basic navigation logic
    switch (page) {
      case 'home':
        alert('Navigating to Home Page!');
        break;
      case 'about':
        alert('Navigating to About Page!');
        break;
      case 'contact':
        alert('Navigating to Contact Page!');
        break;
      case 'forgot':
        alert('Navigating to Forgot Password Page!');
        break;
      default:
        alert('Unknown Page!');
    }
  }
  