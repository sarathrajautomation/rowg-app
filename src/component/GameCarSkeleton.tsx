import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";


const GameCarSkeleton = () => {
  return (
    <Card width='300px'>
      <Skeleton height="200px">
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCarSkeleton;
