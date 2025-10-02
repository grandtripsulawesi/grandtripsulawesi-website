'use client';
import { ArmadaType } from '@/types';
import { useMemo } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import Button from './Button';
import Image from 'next/image';
import Icon from './Icon';
import OrderForm from './OrderForm';
import { clearDialogParams, extractParamsToArmadaType } from '@/lib/utils';
import useURLState from '@/hooks/useUrlState';

const FleetDrawer = () => {
  const { searchParams, updateUrl } = useURLState();
  // Use useMemo to avoid unnecessary recalculations
  const armada = useMemo(
    () => extractParamsToArmadaType(searchParams),
    [searchParams]
  ) as ArmadaType;

  const handleClose = () => {
    updateUrl('/', clearDialogParams(searchParams));
  };

  if (!armada) return null;

  return (
    <Drawer
      open={Boolean(searchParams.get('modal')) === true}
      onOpenChange={(open) => !open && handleClose()}
    >
      <DrawerContent className="w-full h-11/12 px-1 flex flex-col">
        <DrawerHeader className="flex-row justify-between items-baseline">
          <DrawerTitle className="text-xl mx-auto font-heading">
            Booking Detail
          </DrawerTitle>
        </DrawerHeader>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto px-3">
          <div className="flex flex-col space-y-4 pb-4">
            <div className="flex flex-col justify-center">
              <Image
                src={armada.imageUrl}
                alt={armada.name}
                width={300}
                height={300}
                className="size-11/12 mx-auto h-auto"
              />
              <h2 className="font-heading capitalize mx-auto text-2xl font-semibold mb-2">
                {armada.name}
              </h2>
              <div className="w-full flex space-x-4 justify-center">
                <span className="flex items-center space-x-1">
                  <Icon
                    url="/images/armada/icons/armada_user.webp"
                    alt=""
                    height={20}
                    width={20}
                    className="size-3"
                  />
                  <p>{armada.armadaDetail.person}</p>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon
                    url="/images/armada/icons/armada_transmission.webp"
                    alt=""
                    height={20}
                    width={20}
                    className="size-3"
                  />
                  <p className="capitalize text-lg">
                    {armada.armadaDetail.transmission}
                  </p>
                </span>
              </div>
            </div>
            <OrderForm
              handleClose={handleClose}
              rentalCost={armada.armadaDetail.rental}
            />
          </div>
        </div>

        {/* Fixed button at bottom */}
        <div className="sticky bottom-0 bg-background border-t px-3 py-4 mt-auto">
          <Button
            variant="default"
            type="submit"
            form="order-form"
            className="px-4 py-4 w-full bg-green-600"
          >
            <Image
              src={'/icons/icon_whatsapp.webp'}
              alt="icon for whatsapp"
              width={30}
              height={30}
              className="w-6 h-auto"
            />
            <span className="font-semibold text-lg">Rental Armada</span>
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FleetDrawer;
