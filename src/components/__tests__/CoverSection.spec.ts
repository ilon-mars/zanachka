import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import CoverSection from '@/components/CoverSection.vue';


describe('CoverSection', () => {
  it('renders', () => {
    const wrapper = mount(CoverSection);

    expect(wrapper.html()).toContain('Заначка');
  });
});
