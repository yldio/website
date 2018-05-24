import React from 'react';

import PageSection from 'components/PageSection';
import PageSectionHeader from 'components/PageSectionHeader';
import RecentBlogPosts from './RecentBlogPosts';
import UpcomingEvents from './UpcomingEvents';
import { Rule } from './styled';

const Community = () => (
  <PageSection data-selector="home:community">
    <PageSectionHeader
      title="Community"
      description="We define ourselves by the people who represent us. Our emphasis on community and culture creates an environment where we prioritise supporting and nurturing people’s development."
    />
    <RecentBlogPosts />
    <Rule />
    <UpcomingEvents />
  </PageSection>
);

export default Community;
