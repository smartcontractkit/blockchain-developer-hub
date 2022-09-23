import getPagesInfo from '@/helpers/getPagesInfo';
import internal_case_studies_data from '@/data/internal-case-studies-data';

const getInternalCaseStudies = async () => {
  const infos = await getPagesInfo('case-studies');
  const response = infos.map((res) => res.data).filter((res) => res);

  const data = {
    ...internal_case_studies_data,
    items: response,
  };

  return data;
};

export default getInternalCaseStudies;
