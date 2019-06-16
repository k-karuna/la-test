import React, { Component } from 'react';
import Input from '@/components/Input';
import Root from './Root';
import Dropdown from './Dropdown';
import SelectedWrapper from './SelectedWrapper';
import SelectedIndustry from './SelectedIndustry';
import content from '@/content/industries.json';

interface State {
  inputValue: string;
  industries: string[];
  padding: number;
}

interface Props {
  onChange: (industries: string[]) => void;
  info: string;
  error: string;
  placeholder: string;
  required: boolean;
  alternativeStrict: string;
}

class Industries extends Component<Props, State> {
  state = { inputValue: '', industries: [], padding: 0 };

  selectedWrapperRef = React.createRef<HTMLDivElement>();
  MAX_INDUSTRIES = 3;

  onInputChange = (inputValue: string) => {
    this.setState({ inputValue });
  }

  filterItems = (items: string[], query: string) =>
    items.filter((item: string) => {
      const itemLower = item.toLowerCase();
      return itemLower.startsWith(query.toLowerCase());
    })

  handleSelect = (industry: string) => {
    const { onChange } = this.props;
    const industries: string[] = [...this.state.industries];
    if (!industries.includes(industry) && industries.length < this.MAX_INDUSTRIES) {
      industries.push(industry);
      this.setState({ industries }, this.updateInputPadding);
      onChange(industries);
    }
  }

  handleDelete = (industry: string) => {
    const { onChange } = this.props;
    const industries: string[] = [...this.state.industries];
    const industryIndex = industries.indexOf(industry);
    const newIndustries = industries.filter((value: string, index: number) => index !== industryIndex);
    this.setState({ industries: newIndustries }, this.updateInputPadding);
    onChange(newIndustries);
  }

  updateInputPadding = () => {
    if (this.selectedWrapperRef.current) {
      const { width } = this.selectedWrapperRef.current.getBoundingClientRect();
      this.setState({ padding: width, inputValue: '' });
    }
  }

  render() {
    const { info, error, placeholder, required, alternativeStrict } = this.props;
    const { inputValue, industries } = this.state;
    const filteredIndustries = this.filterItems(content.items, inputValue);
    return (
      <Root>
        <Input
          info={info}
          error={error}
          placeholder={placeholder}
          required={required}
          value={inputValue}
          alternativeStrict={alternativeStrict}
          onChange={this.onInputChange}
          padding={this.state.padding}
        />
        <SelectedWrapper ref={this.selectedWrapperRef}>
          {industries.map((industry, index) => (
            <SelectedIndustry key={index} industry={industry} onDelete={this.handleDelete} />
          ))}
        </SelectedWrapper>
        {filteredIndustries.length > 0 && inputValue && (
          <Dropdown industries={filteredIndustries} onClick={this.handleSelect} highlighted={inputValue.length} />
        )}
      </Root>
    );
  }
}

export default Industries;
