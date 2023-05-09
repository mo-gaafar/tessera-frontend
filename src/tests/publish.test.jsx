// Import the publish page component
import PublishPage from './PublishPage';

// Describe the publish page component
describe('PublishPage', () => {
  // Test that the component renders without errors
  it('should render without errors', () => {
    const wrapper = shallow(<PublishPage />);
    expect(wrapper).toHaveLength(1);
  });

  // Test that the form fields have the correct initial values
  it('should have the correct initial form values', () => {
    const wrapper = mount(<PublishPage />);
    const firstNameInput = wrapper.find('#firstName');
    const lastNameInput = wrapper.find('#lastName');
    const emailInput = wrapper.find('#email');

    expect(firstNameInput.prop('value')).toBe('');
    expect(lastNameInput.prop('value')).toBe('');
    expect(emailInput.prop('value')).toBe('');
  });

  // Test that the form fields update correctly when changed
  it('should update form fields correctly', () => {
    const wrapper = mount(<PublishPage />);
    const firstNameInput = wrapper.find('#firstName');
    const lastNameInput = wrapper.find('#lastName');
    const emailInput = wrapper.find('#email');

    firstNameInput.simulate('change', { target: { value: 'John' } });
    lastNameInput.simulate('change', { target: { value: 'Doe' } });
    emailInput.simulate('change', { target: { value: 'john.doe@example.com' } });

    expect(firstNameInput.prop('value')).toBe('John');
    expect(lastNameInput.prop('value')).toBe('Doe');
    expect(emailInput.prop('value')).toBe('john.doe@example.com');
  });

  // Test that the form submission works correctly
  it('should submit the form correctly', () => {
    const mockSubmit = jest.fn();
    const wrapper = mount(<PublishPage onSubmit={mockSubmit} />);
    const form = wrapper.find('form');

    form.simulate('submit');
    expect(mockSubmit).toHaveBeenCalled();
  });
});