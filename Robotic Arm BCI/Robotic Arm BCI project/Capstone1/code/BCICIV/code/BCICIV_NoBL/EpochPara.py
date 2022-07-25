class ePara:
    def __init__(self,action,tmin,tmax,tstep,baseline,ctime,stopTime=None):
        self.ActionName=action
        self.TMin=tmin
        self.TMax=tmax
        self.TStep=tstep
        self.Baseline=baseline
        self.CurTime=ctime
        if(stopTime==None):
            self.StopTime=tmax
        else:
            self.StopTime=stopTime